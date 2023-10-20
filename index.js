const express = require("express");
const app = express();
const path = require("path");
const sudoku = require("sudoku");

const PORT = process.env.PORT || 2015;

app.listen(PORT, () => {
  console.log(`Server Started on ${PORT}`);
});

app.get("/", (req, res) => {
  console.log("here in generateSudoku");
  //Create full random 9x9 sudoku
  var puzzle = sudoku.makepuzzle();

  // Convert the puzzle to a 2D array
  const puzzle2D = [];
  for (let i = 0; i < 9; i++) {
    puzzle2D.push(puzzle.slice(i * 9, (i + 1) * 9).map((value) => value || 0));
  }

  console.log(puzzle2D);

  res.send(puzzle2D);
});
