console.log("Monitor läuft");

const items = document.querySelectorAll(".boot-item");

items.forEach((item) => {

    (item as HTMLElement).classList.remove("visible");

});

items.forEach((item, index) => {

    setTimeout(() => {

        item.classList.add("visible");

    }, 800 + index * 700);

});