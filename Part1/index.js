console.log(`working`)

function play (clickedId){
    let playerClick = document.getElementById(`player`);
    let clickedElement = document.getElementById(clickedId)

    if (playerClick.innerText === `X`) {
        playerClick.innerText = `O`;
        clickedElement.innerText = `X`
    } else {
        playerClick.innerText = `X`;
        clickedElement.innerText = `O`
    }
}