window.addEventListener('DOMContentLoaded', () => {
    // Save references to our DOM nodes
    const tiles = Array.from(document.querySelectorAll('.tile'));
    const playerDisplay = document.querySelector('.display-player');
    const resetButton = document.querySelector('#reset');
    const announcer = document.querySelector('.announcer');

    // Add global variables to control the game.
    // board will be size 9 and hold X and O values for each tile.
    // currentPlayer holds the sign of the current player.
    // isGameActive will be true until someone wins or game's a tie.
    let board = ['', '', '', '', '', '', '', '', ''];
    let currentPlayer = 'X';
    let isGameActive = true;

    // Constants for endgame states.
    const PLAYERX_WON = 'PLAYERX_WON';
    const PLAYERO_WON = 'PLAYERO_WON';
    const TIE = 'TIE';

    // How do we know someone won?
    // We'll store all possible winning positions.
    // We'll store the indices of the 3 positions that can win the game.
    // EX: [0, 1, 2] represents the 1st horizontal line
    /*
        Indexes within the board
        [0] [1] [2]
        [3] [4] [5]
        [6] [7] [8]
    */
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    // Utility functions

    // Decide whether the user wants to perform a valid action or not.
    // If the tile has a X or O return false because the user shouldn't
    // and can't put anything in an occupied tile
    const isValidAction = (tile) => {
        if (tile.innerText === 'X' || tile.innerText === 'O') {
            return false;
        }

        return true;
    }

    // Receive an index as an argument and set the corresponding element
    // in the board array to be the sign of our currentPlayer
    const updateBoard = (index) => {
        board[index] = currentPlayer;
    }

    // Handle player change.
    // First remove the current player's class from playerDisplay.
    // The string template literal player${currentPlayer} will become
    // either playerX or playerO.
    // A ternary (conditional) expresssion to change the current player's
    // value.
    // Finally update the innerText of the playerDisplay and apply the new
    // player class to it.
    const changePlayer = () => {
        playerDisplay.classList.remove(`player${currentPlayer}`);
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        playerDisplay.innerText = currentPlayer;
        playerDisplay.classList.add(`player${currentPlayer}`);
    }

    // Announce the end game result
    const announce = (type) => {
        switch(type) {
            case PLAYERO_WON:
                announcer.innerHTML = 'Player <span class="playerO">O</span> Won';
                break;
            case PLAYERX_WON:
                announcer.innerHTML = 'Player <span class="playerX">X</span> Won';
                break;
            case TIE:
                announcer.innerText = 'Tie';
        }
        announcer.classList.remove('hide');
    };

    // Result evaluation. This will check the board for a win or tie.
    function handleResultValidation() {
        let roundWon = false;
        
        for (let i = 0; i <= 7; i++) {
            const winCondition = winningConditions[i];
            const a = board[winCondition[0]];
            const b = board[winCondition[1]];
            const c = board[winCondition[2]];

            if (a === "" || b === "" || c === "") {
                continue;
            }

            if (a === b && b === c) {
                roundWon = true;
                break;
            }
        }

        if (roundWon) {
            announce(currentPlayer === "X" ? PLAYERX_WON : PLAYERO_WON);
            isGameActive = false;
            return;
        }

        if (!board.includes("")) {
            announce(TIE);
        }
    }

    // Handle the user's action.
    const userAction = (tile, index) => {
        if (isValidAction(tile) && isGameActive) {
          tile.innerText = currentPlayer;
          tile.classList.add(`player${currentPlayer}`);
          updateBoard(index);
          handleResultValidation();
          changePlayer();
        }
    };

    // Game requires event listeners for each tile to work.
    tiles.forEach( (tile, index) => {
        tile.addEventListener('click', () => userAction(tile, index));
    });

    // Reset the board. Loop through each tile and set the innerText
    // back to an empty string like in the beginning. Also remove any
    // player specific classes from the tiles.
    const resetBoard = () => {
        board = ['', '', '', '', '', '', '', '', ''];
        isGameActive = true;
        announcer.classList.add('hide');
    
        if (currentPlayer === 'O') {
            changePlayer();
        }
    
        tiles.forEach(tile => {
            tile.innerText = '';
            tile.classList.remove('playerX');
            tile.classList.remove('playerO');
        });
    }
    
    // Register the resetBoard function as a click event handler for the
    // reset button.
    resetButton.addEventListener('click', resetBoard);
})