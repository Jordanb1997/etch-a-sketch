function generateGrid(gridSize) {
    const gridContainer = document.getElementById('grid-container');
    let cell = document.createElement('div');

    for (let i = 0; i < gridSize * gridSize; i++) {
        gridContainer.appendChild(cell);
        console.log("loop:" + 1)
    }
}