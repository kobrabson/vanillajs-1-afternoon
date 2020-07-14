console.log(`working`)

let gameProg = [];

function play (clickedId){
    let playerClick = document.getElementById(`player`);
    let clickedElement = document.getElementById(clickedId)

    if (playerClick.innerText === `X`) {
        playerClick.innerText = `O`;
        clickedElement.innerText = `X`
        gameProg[clickedId] = `X`
    } else {
        playerClick.innerText = `X`;
        clickedElement.innerText = `O`
        gameProg[clickedId] = `O`
    }
    console.log(gameProg);
}


const topLeft = `#0`
const topCenter = `#1`
const topRight = `#2`
const middleLeft = `#3`
const middleCenter = `#4`
const middleRight = `#5`
const bottomLeft = `#6`
const bottomCenter = `#7`
const bottomRight = `#8`

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function winnings() {
    let roundWon = false;
    for ( let i = 0; i <= 7; i++) {
        const winningCondition = winningConditions[i];
        let a = gameProg[winningCondition[0]];
        let b = gameProg[winningCondition[1]];
        let c = gameProg[winningCondition[2]];
        if (a === `` || b ===`` || c === ``) {
            continue;
        }
        if ( a === b && b === c) {
            roundWon = true;
            break
        }

    }
if (roundWon) {
    alert(`you are the winner`)
    console.log(winner)
}
}
