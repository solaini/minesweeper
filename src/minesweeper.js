class Board {
    constructor(numberOfRows, numberOfColumns, numberOfBombs){
        this._numberOfBombs;
        this._numberOfTiles = numberOfColumns * numberOfRows;
        this._playerBoard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);
        this._bombBoard = Board.generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs);
    }
    get playerBoard(){
        return this._playerBoard;
    }
    //User defined tile selection to check where bombs are
    flipTile(rowIndex, columnIndex) {
        if(this._playerBoard[rowIndex][columnIndex] !== ' '){
            console.log('This tile has already been flipped!')
            return;
        }else if(this._bombBoard[rowIndex][columnIndex] === 'B'){
            this._playerBoard[rowIndex][columnIndex] = 'B';
        }else{
            this._playerBoard[rowIndex][columnIndex] = this.getNumberOfNeighborBombs(rowIndex, columnIndex);
        };
        this._numberOfTiles--;
    };
    //Calculate the number of bombs around a tile
    getNumberOfNeighborBombs(rowIndex, columnIndex) {
        const neighborOffsets = [[0, 1],[1, 0],[1, 1],[-1, -1], [-1, 0], [0, -1],[-1, 1],[1, -1]];
        const numberOfRows = this._bombBoard.length;
        const numberOfColumns = this._bombBoard[0].length;
        let numberOfBombs = 0;
            neighborOffsets.forEach( offset => {
                const neighborRowIndex = rowIndex + offset[0];
                const neighborColumnIndex = columnIndex + offset[1];
                if(neighborRowIndex >= 0 && neighborRowIndex < numberOfRows && neighborColumnIndex >= 0 && neighborColumnIndex < numberOfColumns){
                    if(this._bombBoard[neighborRowIndex][neighborColumnIndex] === 'B'){
                    this._numberOfBombs++;//Is this a local variable or a constructor variable?
                };
                console.log(`There are ${numberOfBombs} number of Bombs`);
            };
        });
        return this._numberOfBombs;
    };
    hasSafeTiles(){
         return this._numberOfTiles !== this._numberOfBombs;
    };
        //Do we need to split this out to the two different boards?  Instruction 19
    print(){
        //console.log(board.map(row => row.join(' | ')).join('\n'))
        console.log(this._playerBoard.map(row => row.join(' | ')).join('\n'));
        console.log(this._bombBoard.map(row => row.join(' | ')).join('\n'));
        };
    //generate Player Board
        static generatePlayerBoard (numberOfRows, numberOfColumns){
        let board = [];
        for(let i = 0; i < numberOfRows; i++){
            let row = [];
            for(j = 0; j < numberOfColumns; j++){
                row.push(' ');
            } 
            board.push(row);
        }
        return board;
        };
    //Generate Bomb Board
    static generateBombBoard (numberOfRows, numberOfColumns, numberOfBombs) {
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
        if(board[randomRowIndex][randomColumnIndex] !== 'B'){
                board[randomRowIndex][randomColumnIndex] = 'B';
                numberOfBombsPlaced++;
        }  
        }
        return board;
    }
}


let playerBoard = generatePlayerBoard(3, 3);
let bombBoard = generateBombBoard(3, 3, 4);
console.log('Player Board: ');
printBoard(playerBoard);
console.log('Bomb Board: ');
printBoard(bombBoard);
flipTile(playerBoard, bombBoard, 0, 0);
console.log('Updated Player Board: ');
printBoard(playerBoard);