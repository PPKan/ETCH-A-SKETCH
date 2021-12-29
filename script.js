const container = document.querySelector(".container");
const button = document.querySelector(".btn");

/* first attempt */
makeGrid();
gridColor();

function makeGrid() {

    let frame = prompt("What grid do you like? X x X?");
    while (frame > 100 || frame < 1) {
        alert("Enter a number between 1 and 100");
        frame = prompt("What grid do you like? X x X?");
    }

    for (let i = 0; i < frame * frame; i += 1) {
        const div = document.createElement('div');
        div.classList = "grid";
        container.appendChild(div);
        container.style.gridTemplateColumns = `repeat(${frame}, 1fr)`;
    }
}


button.addEventListener('click', (e) => {
    const divs = document.querySelectorAll(".grid")
    divs.forEach((div) => {
        container.removeChild(div);
    })
    makeGrid();
    gridColor();
});

function gridColor() {
    let grids = document.querySelectorAll(".grid");
    grids.forEach((grid) => {
        grid.addEventListener('mouseover', () => {
            grid.style.background = randomColor();
            setTimeout(() => grid.style.background = "white", 3000);
        });
    });
}

function randomColor() {
    return "#" + (Math.floor(Math.random() * 16777215)).toString(16);
}