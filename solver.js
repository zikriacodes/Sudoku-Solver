function solveSudoku(board) {
    // Function to find the next empty cell (represented by 0) in the board
    const findEmpty = (board) => {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                if (board[row][col] === 0) return [row, col]; // Return the position as soon as an empty cell is found
            }
        }
        return null; // Return null if no empty cells are found (the board is solved)
    };

    // Function to check if placing a number at a specific position is valid
    const isValid = (board, num, pos) => {
        const [row, col] = pos;

        // Check the row for duplicates
        for (let i = 0; i < 9; i++) {
            if (board[row][i] === num && i !== col) {
                return false;
            }
        }

        // Check the column for duplicates
        for (let i = 0; i < 9; i++) {
            if (board[i][col] === num && i !== row) {
                return false;
            }
        }

        // Check the 3x3 sub-grid for duplicates
        const boxRow = Math.floor(row / 3) * 3;
        const boxCol = Math.floor(col / 3) * 3;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[boxRow + i][boxCol + j] === num && (boxRow + i !== row || boxCol + j !== col)) {
                    return false;
                }
            }
        }

        return true; // The number can be placed safely
    };

    // Recursive function to solve the Sudoku
    const solve = () => {
        const currPos = findEmpty(board);

        // If no empty cells are found, the puzzle is solved
        if (currPos === null) {
            return true;
        }

        const [row, col] = currPos;

        // Try placing numbers 1 through 9 in the empty cell
        for (let num = 1; num <= 9; num++) {
            if (isValid(board, num, [row, col])) {
                board[row][col] = num; // Place the number

                // Recursively attempt to solve the rest of the board
                if (solve()) {
                    return true; // If it solves the board, return true
                }

                // Backtrack: reset the cell if no solution is found
                board[row][col] = 0;
            }
        }

        return false; // Return false if no valid number can be placed
    };

    solve(); // Start solving the Sudoku
    return board; // Return the solved board
}

// Example Sudoku board (0 represents empty cells)
const sudokuBoard = [
    [0, 9, 8,   6, 0, 0,   5, 2, 0],
    [2, 4, 0,   0, 0, 0,   0, 9, 6],
    [0, 0, 0,   2, 1, 0,   0, 0, 0],

    [4, 0, 0,   1, 0, 8,   0, 0, 2],
    [6, 0, 7,   0, 5, 0,   4, 0, 8],
    [0, 0, 0,   4, 0, 6,   0, 0, 0],

    [0, 0, 0,   0, 4, 5,   0, 0, 0],
    [5, 7, 0,   0, 0, 0,   0, 8, 9],
    [0, 3, 2,   0, 0, 1,   6, 4, 0]
];

// Log the solved Sudoku board
console.log(solveSudoku(sudokuBoard));
