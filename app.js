const board = document.querySelector("#etch");
const clearBtn = document.querySelector("#etch-ui button")
const boardSize = 16;

for (let i = 0; i < boardSize * boardSize; i++) {
    const newSquare = document.createElement("div");
    newSquare.classList.add("square");
    board.appendChild(newSquare);

    // Add event listener to all squares on mouse enter
    newSquare.addEventListener("mouseenter", function () {
        this.classList.add("painted");
    });
}

clearBtn.addEventListener("click", () => {
    const allSquares = document.querySelectorAll(".square");

    for (const square of allSquares) {
        square.classList = "square";
    }
});