const container = document.querySelector(".container");

function makeGrid(x) {
  for (let rows = 0; rows < x; rows++) {
    for (let cols = 0; cols < x; cols++) {
        const grid = document.createElement("div");
        grid.classList.add("grid");
        grid.style.width = `${960/x}px`;
        grid.style.height = `${960/x}px`;
        grid.addEventListener("mouseover", function() {
          grid.style.backgroundColor = "black";
        });
        container.appendChild(grid);
    }
  }
};

makeGrid(10);