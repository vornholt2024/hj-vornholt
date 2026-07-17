import { MonitorState } from "./monitor-state";
import { MonitorUI } from "./monitor-ui";
import { ProgressRunner } from "./progress-runner";
import { VideoPlayer } from "./video-player";

export class MonitorController {

    private state = MonitorState.OFF;

    private readonly progress: ProgressRunner;
    private readonly video: VideoPlayer;

    constructor(
        private readonly ui: MonitorUI
    ) {

        this.progress = new ProgressRunner(
            this.ui.progressBar
        );

        this.video = new VideoPlayer(
            this.ui.portfolioVideo
        );

    }

    // private registerVideoEvents() {

    //     this.ui.portfolioVideo.addEventListener(
    //         "ended",
    //         () => this.loopVideo()
    //     ); 

    // }

    private changeState(newState: MonitorState) {

        this.state = newState;

        console.log("State →", this.state);

    }

    private delay(ms: number): Promise<void> {

        return new Promise(resolve => setTimeout(resolve, ms));

    }

    private async powerOn() {

        this.changeState(MonitorState.POWER_ON);

        await this.delay(400);

        this.ui.powerOn();

        await this.delay(350);

    }

    private async boot() {

        this.changeState(MonitorState.BOOT);

        this.ui.bootItems.forEach(item => {

            item.classList.remove("visible");

        });

        const progressTask =
            this.progress.run(4000);

        for (const item of this.ui.bootItems) {

            item.classList.add("visible");

            await this.delay(700);

        }

        await progressTask;

    }

    private async launch() {

        this.changeState(MonitorState.LAUNCH);

        // Boot-Elemente ausblenden
        this.ui.hideBootItems();

        // Progress zurücksetzen
        this.progress.reset();

        // Status ändern
        this.ui.setBootStatus("Launching Portfolio...");

        // zweiter Progress (1 Sekunde)
        await this.progress.run(1000);

        // kurzer Moment, damit der Benutzer den
        // fertigen Balken wahrnimmt
        await this.delay(250);

        // Bootscreen ausblenden
        this.ui.hideBootScreen();

    }

    private async startVideo() {

        this.changeState(MonitorState.VIDEO);

        this.video.restart();

        await this.video.waitUntilReady();

        await this.delay(300);
        
        this.ui.showVideo();

        const started = await this.video.play();

        if (!started) {

            return;

        }

    }

    private async loopVideo() {

        this.changeState(MonitorState.LOOP);

        // Endbild kurz stehen lassen
        await this.delay(2000);

        this.ui.portfolioVideo.currentTime = 0;

        try {

            await this.ui.portfolioVideo.play();

        }
        catch (error) {

            console.error("Video konnte nicht erneut gestartet werden.", error);

        }

        this.changeState(MonitorState.VIDEO);

    }

    async start() {

        console.log("Monitor läuft");

/*         this.registerVideoEvents(); */

        await this.powerOn();

        await this.boot();

        await this.launch();

        await this.startVideo();

    }

}