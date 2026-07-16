export class ProgressRunner {

    constructor(
        private readonly progressBar: HTMLElement
    ) {}

    private delay(ms: number): Promise<void> {

        return new Promise(resolve => setTimeout(resolve, ms));

    }

    async run(duration: number) {

        this.show();

        this.reset();

        const fps = 60;
        const interval = 1000 / fps;
        const steps = duration / interval;

        for (let i = 0; i <= steps; i++) {

            const percent = (i / steps) * 100;

            this.setWidth(percent);

            await this.delay(interval);

        }

    }

    reset() {

        this.setWidth(0);

    }

    finish() {

        this.setWidth(100);

    }

    setWidth(percent: number) {

        this.progressBar.style.width = `${percent}%`;

    }

    show() {

        this.progressBar.style.visibility = "visible";

    }

    hide() {

        this.progressBar.style.visibility = "hidden";

    }

}