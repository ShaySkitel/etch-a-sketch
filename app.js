const board = document.querySelector("#etch");
const clearBtn = document.querySelector("#etch-ui button")
const boardWidth = 480;
let amountOfSquares = 16;

function generateBoard() {
    for (let i = 0; i < amountOfSquares * amountOfSquares; i++) {
        const widthHeight = boardWidth / amountOfSquares;
        const newSquare = document.createElement("div");
        newSquare.classList.add("square");
        newSquare.style.cssText = `width: ${widthHeight}px; height: ${widthHeight}px`;
        board.appendChild(newSquare);

        // Add event listener to all squares on mouse enter
        newSquare.addEventListener("mouseenter", function () {
            this.classList.add("painted");
        });
    }
}

clearBtn.addEventListener("click", () => {
    const allSquares = document.querySelectorAll(".square");

    // Remove existing squares on the grid
    for (const square of allSquares) {
        square.remove();
    }

    const newBoardSize = +prompt("Select a board size", 16);

    // Create 16 creates if the user gave invalid size
    if (typeof newBoardSize !== "number" || newBoardSize < 1) {
        amountOfSquares = 16;
        // Otherwise, generate a board using the user's input
    } else {
        amountOfSquares = newBoardSize;
    }

    // Create new squares
    generateBoard();
});

generateBoard();