
export class VideoPlayer {

    constructor(
        private readonly video: HTMLVideoElement
    ) {}

async play(): Promise<boolean> {

    try {

        await this.video.play();

        return true;

    }
    catch (error) {

        console.error(
            "Video konnte nicht gestartet werden.",
            error
        );

        return false;

    }

}

    pause() {

        this.video.pause();

    }

    restart() {

        this.video.currentTime = 0;

    }

    async waitUntilReady(): Promise<void> {

        if (this.video.readyState >= HTMLMediaElement.HAVE_ENOUGH_DATA) {

            return;

        }

        await new Promise<void>(resolve => {

            this.video.addEventListener(
                "canplay",
                () => resolve(),
                { once: true }
            );

        });

    }

}