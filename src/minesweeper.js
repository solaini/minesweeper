const printBoard = board => {
    console.log(board.map(row => row.join(' | ')).join('\n'));
}

//Generate the player board
const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
    let board = [];
    for(let i = 0; i < numberOfRows; i++){
        let row = [];
        for(j = 0; j < numberOfColumns; j++){
            row.push(' ');
        } 
        board.push(row);
    }
    return board
}
const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
    let board = [];
    for(let i = 0; i < numberOfRows; i++){
        let row = [];
        for(j = 0; j < numberOfColumns; j++){
            row.push(null);
        } 
        board.push(row);
    }
    let numberOfBombsPlaced = 0;
    while(numberOfBombs > numberOfBombsPlaced){
        let randomRowIndex = Math.floor(Math.random() * numberOfRows);
        let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
       //Code has potential to duplicate locations for bomb placement.  Will fix this after learning control flow.
        board[randomRowIndex][randomColumnIndex] = 'B';
        numberOfBombsPlaced++;
    }
    
    return board;
}
let playerBoard = generatePlayerBoard(3, 4);
let bombBoard = generateBombBoard(3, 4, 5);
console.log('Player Board: ');
printBoard(playerBoard);
console.log('Bomb Board: ');
printBoard(bombBoard);
