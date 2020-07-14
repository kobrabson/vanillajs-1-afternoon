console.log(`working`)

const board = [];

function play (clickedId){
    const playerSpan = document.getElementById(`player`);
    const clickedElement = document.getElementById(clickedId);

    if (playerSpan.innerText === `X`) {
        playerSpan.innerText = `O`;
        clickedElement.innerText = `X`;
        board[clickedId] = `X`;
    } else {
        playerSpan.innerText = `X`;
        clickedElement.innerText = `O`;
        board[clickedId] = `O`;
    }
    console.log(board);



const topLeft = board[0]
const topCenter = board[1]
const topRight = board[2]
const middleLeft = board[3]
const middleCenter =board[4]
const middleRight = board[5]
const bottomLeft = board[6]
const bottomCenter = board[7]
const bottomRight = board[8]


if ( topLeft !== undefined && topLeft === topCenter && topLeft === topRight) {
    alert(`${topLeft} is the winner`);
    return;
}

if ( middleLeft !== undefined && middleLeft === middleCenter && middleLeft === middleRight) {
    alert(`${topLeft} is the winner`);
    return;
}

if ( bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight) {
    alert(`${bottomLeft} is the winner`);
    return;
}

if ( topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft) {
    alert(`${topLeft} is the winner`);
    return;
}

if ( topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter) {
    alert(`${topCenter} is the winner`);
    return;
}

if ( topRight !== undefined && topRight === middleRight && topRight === bottomRight) {
    alert(`${topRight} is the winner`);
    return;
}

if ( topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight) {
    alert(`${topLeft} is the winner`);
    return;
}

if ( bottomLeft !== undefined && bottomLeft === middleCenter && bottomLeft === topRight) {
    alert(`${bottomLeft} is the winner`);
    return;
}

let boardFull = true;
for ( let i = 0; i <= 8; i++) {
    if (board[i] === undefined) {
        boardFull = false;
    }
}
if (boardFull === true) {
    alert (`Cat's game`)
    }

}
















// const winningConditions = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
// ]

// function winnings() {
//     let roundWon = false;
//     for ( let i = 0; i <= 7; i++) {
//         const winningCondition = winningConditions[i];
//         let a = gameProg[winningCondition[0]];
//         let b = gameProg[winningCondition[1]];
//         let c = gameProg[winningCondition[2]];
//         if (a === `` || b ===`` || c === ``) {
//             continue;
//         }
//         if ( a === b && b === c) {
//             roundWon = true;
//             break
//         }

//     }
// if (roundWon) {
//     alert(`you are the winner`)
//     console.log(winner)
// }
// }
