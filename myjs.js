const grid = document.querySelector(".grid");
let newDiv;
let x = 8;

for (let i =0; i<(x*x); i++) {
    newDiv = document.createElement("div");
    newDiv.style.boxSizing = "border-box";
    newDiv.style.border = "solid 1px red";
    newDiv.style.width = `${800/x}px`;
    newDiv.style.height = `${800/x}px`;
    grid.appendChild(newDiv);
    console.log(newDiv.style.width)
}

