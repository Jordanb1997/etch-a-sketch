const gridContainer = document.getElementById('grid-container');
for (let i = 0; i < 16 * 16; i++) {
    let cell = document.createElement('div');
    cell.className = ("grid-cell");
    gridContainer.appendChild(cell);
}

/* function createGrid(gridSize) {
    for (let i = 0; i < gridSize * gridSize; i++) {
        let cell = document.createElement('div');
        gridContainer.appendChild(cell);
        console.log("loop:" + 1)
    }
} */