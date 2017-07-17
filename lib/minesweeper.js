'use strict';

//Function prints the current status of the Minesweeper board
// const printBoard = () => {
//     console.log("Current Board:");
//     console.log(board[0].join(' | '));
//     console.log(board[1].join(' | '));
//     console.log(board[2].join(' | '));
// }


var printBoard = function printBoard(board) {
    console.log(board.map(function (row) {
        return row.join(' | ');
    }).join('\n'));
};

//Generate the player board
var generatePlayerBoard = function generatePlayerBoard(numberOfRows, numberOfColumns) {
    var board = [];
    for (var i = 0; i < numberOfRows; i++) {
        var row = [];
        for (j = 0; j < numberOfColumns; j++) {
            row.push(' ');
        }
        board.push(row);
    }
    return board;
};
var generateBombBoard = function generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
    var board = [];
    for (var i = 0; i < numberOfRows; i++) {
        var row = [];
        for (j = 0; j < numberOfColumns; j++) {
            row.push(null);
        }
        board.push(row);
    }
    var numberOfBombsPlaced = 0;
    while (numberOfBombs > numberOfBombsPlaced) {
        var randomRowIndex = Math.floor(Math.random() * numberOfRows);
        var randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
        //Code has potential to duplicate locations for bomb placement.  Will fix this after learning control flow.
        board[randomRowIndex][randomColumnIndex] = 'B';
        numberOfBombsPlaced++;
    }

    return board;
};
var playerBoard = generatePlayerBoard(3, 4);
var bombBoard = generateBombBoard(3, 4, 5);
console.log('Player Board: ');
printBoard(playerBoard);
console.log('Bomb Board: ');
printBoard(bombBoard);