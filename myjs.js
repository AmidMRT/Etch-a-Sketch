const gridContainer = document.querySelector(".gridContainer");
let newDiv;
let x = 16;
let grid;
let size;
genCell(x);

let cell = document.querySelectorAll(".cell");
let cellArray = Array.from(cell);
cellArray.forEach(cellColor);

function genCell (x) {
    grid = document.createElement("div");
    grid.className = "grid";
    gridContainer.appendChild(grid);
    for (let i =0; i<(x*x); i++) {
        newDiv = document.createElement("div");
        newDiv.className = "cell";
        newDiv.style.boxSizing = "border-box";
        newDiv.style.width = `${600/x}px`;
        newDiv.style.height = `${600/x}px`;
        grid.appendChild(newDiv);
        console.log(newDiv.className)
    }
}

function cellColor (cellElement) {
    cellElement.addEventListener("mousemove", (event)=> {
        if (event.buttons == 1) {
            cellElement.style.backgroundColor = `rgb(${(Math.random())*255} ${(Math.random())*255} ${(Math.random())*255})`;
            event.preventDefault();
        }
    })
}

function cellDecolor (cellElement) {
    cellElement.addEventListener("mousemove", (event)=> {
        if (event.buttons == 1) {
            cellElement.style.backgroundColor = "";
        }
    })
}

const sizeButton = document.querySelector(".sizeButton");
sizeButton.addEventListener("mousedown", ()=>{
    size = prompt('please enter grid size');
    gridContainer.removeChild(grid);
    genCell(size);
    cell = document.querySelectorAll(".cell");
    cellArray = Array.from(cell);
})

const brushButton = document.querySelector(".brushButton");
brushButton.addEventListener("click", ()=>{
    cellArray.forEach(cellColor);
})

const eraserButton = document.querySelector(".eraserButton");
eraserButton.addEventListener("click", ()=>{
    cellArray.forEach(cellDecolor);
})

const clearButton = document.querySelector(".clearButton");
clearButton.addEventListener("click", ()=>{
    cellArray.forEach((cellElement)=> {cellElement.style.backgroundColor = "";});
})