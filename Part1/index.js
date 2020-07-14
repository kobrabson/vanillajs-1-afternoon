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


