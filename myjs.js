const gridContainer = document.querySelector(".gridContainer");
let newDiv;
let x = 20;
let grid;
genCell(x);

let cell = document.querySelectorAll(".cell");
let cellArray = Array.from(cell);
cellArray.forEach(cellColor);
cellArray.forEach(cellDecolor);


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
    cellElement.addEventListener("mouseover", ()=> {
    cellElement.style.backgroundColor = "blue";
})}

function cellDecolor (cellElement) {
    cellElement.addEventListener("mouseout", ()=> {
    cellElement.style.backgroundColor = "";
})}

const sizeButton = document.querySelector(".sizeButton");
sizeButton.addEventListener("click", ()=>{
    size = prompt('please enter grid size');
    gridContainer.removeChild(grid);
    genCell(size);
    cell = document.querySelectorAll(".cell");
    cellArray = Array.from(cell);
    cellArray.forEach(cellColor);
    cellArray.forEach(cellDecolor);
})