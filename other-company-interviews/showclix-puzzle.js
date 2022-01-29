class venue {

    constructor(rowCount, colCount) {
        this.rowCount = rowCount;
        this.colCount = colCount;
        this.seatingChart = new Array(rowCount).fill(1).map(() => new Array(colCount).fill(1));
        this.totalSeats = rowCount * colCount;
    }

    // if user types in form "RxCy"
    reserve(row, col) {
        if (this.seatingChart[row][col] !== "X" && this.seatingChart[row][col] !== "O") {
            this.seatingChart[row][col] = "X";
            this.totalSeats--;
        } else {
            return "Not Available";
        }
    }

    // since "best seat" is given, each seat is given a value of the Manhattan distance from
    // the seat to the best seat. 
    manhattanArr() {
        let newArr = this.seatingChart,
        bestSeatRow = 0,
        bestSeatCol = Math.floor(this.colCount/2);

        for (let row = 0; row < newArr.length; row++) {
            for (let col = 0; col < newArr[0].length; col++) {
                newArr[row][col] = Math.abs(row - bestSeatRow) + Math.abs(col - bestSeatCol);
            }
        }

        this.seatingChart = newArr;
    }

    // if a digit is input instead of row col value
    reserveConsecutive(seats) {
        let tempSum = 0,
        min = Infinity,
        minRow = 0,
        minCol = 0;

        for (let row = 0; row < this.rowCount; row++) {
            tempSum = 0;

            for (let col = 0; col < this.colCount; col++) {
                if (col + seats - 1 > this.colCount) continue;

                tempSum = this.isEnoughSeats(seats, row, col);

                if (tempSum === -1) continue;
                
                if (tempSum < min) {
                    min = tempSum;
                    minRow = row;
                    minCol = col;
                    tempSum = 0;
                }
            }
        }

        if (min === Infinity) {
            console.log("Not Available");
            return;
        }

        for (let i = 0; i < seats; i++) {
            this.seatingChart[minRow][minCol + i] = "O";
            this.totalSeats--;
        }

        if (seats === 1) {
            console.log("R" + (minRow + 1) + "C" + (minCol + 1));
        } else {
            console.log("R" + (minRow + 1) + "C" + (minCol + 1) + " - " + "R" + (minRow + 1) + "C" + (minCol + seats));
        }

        return;
    }

    // check is enough contiguous seats are available
    isEnoughSeats(seats, row, col) {        
        let sum = 0;

        for (let i = 0; i < seats; i++) {
            if (this.seatingChart[row][col + i] === "X" || this.seatingChart[row][col + i] === "O") return -1;

            sum += this.seatingChart[row][col + i];
        }

        return sum;
    }
}

// create new venue object with 3 rows and 11 columns and create Manhattan Distance Array
let redRocks = new venue(3, 11);
redRocks.manhattanArr();

// setup stdin and stdout
let readline = require('readline'),

    rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    });

// regex variables to help handle different stdin
let digit = new RegExp(/^\d+$/),
    seat = new RegExp(/R\d+C\d+$/, 'g'),
    number_regex = /[+-]?\d+(\.\d+)?/g,
    end_regex = new RegExp(/end/, 'i'),
    matches = [],
    pairs = [];

rl.on('line', function (line) {
    // case for just digits
    if (digit.test(line)) redRocks.reserveConsecutive(Number(line));

    // case for specific RxCy strings
    if (seat.test(line)) {
        let match;
        while ((match = number_regex.exec(line)) !== null) {
            pairs.push(match[0] - 1);
            
            if (pairs.length === 2) {
                matches.push(pairs);
                pairs = [];
            }
        }

        for (let i = 0; i < matches.length; i++) {
            let row = matches[i][0],
            col = matches[i][1];

            redRocks.reserve(row, col);
        }
    }

    // case for "end" input by user
    if (end_regex.test(line)) {
        console.log(redRocks.totalSeats);
        process.exit();
    }
});

