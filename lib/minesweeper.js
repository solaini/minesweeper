'use strict';

//Function prints the current status of the Minesweeper board
var printBoard = function printBoard() {
    console.log("Current Board:");
    console.log(board[0].join(' | '));
    console.log(board[1].join(' | '));
    console.log(board[2].join(' | '));
};
//Empty game board array
var board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
printBoard(board);
board[0][1] = '1';
board[2][2] = 'B';
printBoard(board);