
export class VideoPlayer {

    constructor(
        private readonly video: HTMLVideoElement
    ) {}

    async play() {

        try {

            await this.video.play();

        }
        catch (error) {

            console.error(
                "Video konnte nicht gestartet werden.",
                error
            );

        }

    }

    pause() {

        this.video.pause();

    }

    restart() {

        this.video.currentTime = 0;

    }

}