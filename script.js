const container = document.querySelector(".container");

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function makeGrid(x) {
  for (let rows = 0; rows < x; rows++) {
    for (let cols = 0; cols < x; cols++) {
        const grid = document.createElement("div");
        grid.classList.add("grid");
        grid.style.width = `${960/x}px`;
        grid.style.height = `${960/x}px`;
        grid.addEventListener("mouseover", changeColor);
        grid.addEventListener("mousedown", changeColor);
        container.appendChild(grid);
    }
  }
};

function changeColor(e) {
  if (e.type === 'mouseover' && !mouseDown) return
  e.target.style.backgroundColor = "black";
}

function removeGrid() {
  container.innerHTML = "";
}

function newGrid() {
  const input = prompt("Enter number of squares per side (e.g. 64 for a 64 x 64 grid)");
  if (input < 8 || input > 64) {
    alert("Invalid input, please input from 8 to 64 only.");
  } else {
    removeGrid();
    makeGrid(input);
  }
}

window.onload = () => {
  makeGrid(64);
};
