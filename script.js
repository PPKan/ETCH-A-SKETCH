const container = document.querySelector(".container");
const resetButton = document.querySelector(".reset");
const cleanButton = document.querySelector(".clean");

/* first attempt */
makeFrame(10);
gridColor(randomColor);

function makeGrid() {

    let frame = prompt("What grid do you like? X x X?");
    while (frame > 100 || frame < 1) {
        alert("Enter a number between 1 and 100");
        frame = prompt("What grid do you like? X x X?");
    }

    makeFrame(frame);
}

function makeFrame(frame) {
    for (let i = 0; i < frame * frame; i += 1) {
        const div = document.createElement('div');
        div.classList = "grid";
        container.appendChild(div);
        container.style.gridTemplateColumns = `repeat(${frame}, 1fr)`;
    }
}

resetButton.addEventListener('click', (e) => {
    const divs = document.querySelectorAll(".grid")
    divs.forEach((div) => {
        container.removeChild(div);
    })
    makeGrid();
    gridColor(randomColor);
});

cleanButton.addEventListener('click', () => {
    let grids = document.querySelectorAll(".grid");
    grids.forEach((grid) => {
        grid.style.background = "white";
    });
});

function gridColor(color) {
    let grids = document.querySelectorAll(".grid");
    grids.forEach((grid) => {
        grid.addEventListener('mouseover', () => {
            grid.style.background = color();
            // setTimeout(() => grid.style.background = "white", 10000);
        });
    });
}

function randomColor() {
    return "#" + (Math.floor(Math.random() * 16777215)).toString(16);
}

function whiteColor() {
    return "white";
}