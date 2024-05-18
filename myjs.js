const grid = document.querySelector(".grid");
let newDiv;
let x = 20;

for (let i =0; i<(x*x); i++) {
    newDiv = document.createElement("div");
    newDiv.classList.add("cell");
    newDiv.style.boxSizing = "border-box";
    newDiv.style.border = "solid 1px red";
    newDiv.style.width = `${800/x}px`;
    newDiv.style.height = `${800/x}px`;
    grid.appendChild(newDiv);
    console.log(newDiv.className)
}

const cellElement = document.querySelectorAll(".cell");

const cellArray = Array.from(cellElement);

function cellColor (cell) {
    cell.addEventListener("mouseover", ()=> {
    cell.style.backgroundColor = "blue";
})}

function cellDecolor (cell) {
    cell.addEventListener("mouseout", ()=> {
    cell.style.backgroundColor = "";})}

cellArray.forEach(cellColor)
cellArray.forEach(cellDecolor)