export class MonitorUI {

    readonly bootScreen: HTMLElement;

    readonly progressBar: HTMLElement;

    readonly bootStatus: HTMLElement;

    readonly bootItems: NodeListOf<HTMLElement>;

    readonly monitorVideo: HTMLElement;

    readonly portfolioVideo: HTMLVideoElement;

    readonly monitorDisplay: HTMLElement;

    readonly powerOverlay: HTMLElement;

    constructor() {

        this.bootScreen =
            document.getElementById("bootScreen") as HTMLElement;

        this.progressBar =
            document.getElementById("progressBar") as HTMLElement;

        this.bootStatus =
            document.getElementById("bootStatus") as HTMLElement;

        this.bootItems =
            this.bootScreen.querySelectorAll(".boot-item");

        this.monitorVideo =
            document.getElementById("monitorVideo") as HTMLElement;

        this.portfolioVideo =
            document.getElementById("portfolioVideo") as HTMLVideoElement;

        this.monitorDisplay =
            document.getElementById(
            "monitorDisplay"
            ) as HTMLElement;

        this.powerOverlay =
            document.getElementById(
                "powerOverlay"
            ) as HTMLElement;

    }

    powerOn() {

        this.powerOverlay.classList.add("off");

    }

    showBootScreen() {

        this.bootScreen.classList.remove("hidden");

    }

    hideBootScreen() {

        this.bootScreen.classList.add("hidden");

    }

    showBootItems() {

        this.bootItems.forEach(item => {

            item.classList.add("visible");

        });

    }

    hideBootItems() {

        this.bootItems.forEach(item => {

            item.classList.remove("visible");

        });

    }

    setBootStatus(text: string) {

        this.bootStatus.textContent = text;

    }

    showVideo() {

        this.monitorVideo.classList.add("visible");

    }

    hideVideo() {

        this.monitorVideo.classList.remove("visible");

    }

}