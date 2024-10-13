# Sudoku Solver in JavaScript

This repository contains a Sudoku solver implemented in JavaScript using a backtracking algorithm. The solver takes a 9x9 Sudoku grid as input and fills in the empty spaces to solve the puzzle according to the rules of Sudoku.

## Overview

The Sudoku solver is designed to solve puzzles by finding a valid configuration for each empty cell (`0`) in the grid. It uses a recursive backtracking approach, which tries different values and backtracks if it encounters a conflict.

### Features

- Efficient and simple implementation using JavaScript.
- Solves any valid 9x9 Sudoku puzzle.
- Demonstrates the application of the backtracking algorithm.

## How to Use

1. Clone the repository:

   ```bash
   git clone https://github.com/zikriacodes/Sudoku-Solver.git
   ```

2. Open the project directory:

   ```bash
   cd Sudoku-Solver
   ```

3. Run the code using Node.js or in the browser console. Below is a sample usage:

   ```javascript
   const sudokuBoard = [
     [5, 3, 0, 0, 7, 0, 0, 0, 0],
     [6, 0, 0, 1, 9, 5, 0, 0, 0],
     [0, 9, 8, 0, 0, 0, 0, 6, 0],
     [8, 0, 0, 0, 6, 0, 0, 0, 3],
     [4, 0, 0, 8, 0, 3, 0, 0, 1],
     [7, 0, 0, 0, 2, 0, 0, 0, 6],
     [0, 6, 0, 0, 0, 0, 2, 8, 0],
     [0, 0, 0, 4, 1, 9, 0, 0, 5],
     [0, 0, 0, 0, 8, 0, 0, 7, 9],
   ];

   console.log(solveSudoku(sudokuBoard));
   ```

   This will output the solved Sudoku grid in the console.

## Algorithm Explanation

1. **Find the First Empty Spot**: The `findEmpty` function scans the grid for the first occurrence of `0` (an empty cell).

2. **Check Validity**: The `isValid` function ensures that placing a number does not violate Sudoku rules:

   - Checks the current row for conflicts.
   - Checks the current column for conflicts.
   - Checks the 3x3 grid for conflicts.

3. **Solve Function**: This is the recursive part of the algorithm:

   - It tries to place a number between 1 and 9 in the empty cell.
   - If the number fits according to the rules, it moves on to the next empty cell.
   - If a conflict is found, it backtracks and tries the next number.

4. **Return the Solution**: Once all cells are filled correctly, the function returns the solved board.

## Requirements

- Node.js (if you want to run it in a Node environment) or a browser console that supports JavaScript.

## Contributing

Feel free to contribute by opening issues or submitting pull requests. Any suggestions for improving the algorithm or adding features are welcome!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
