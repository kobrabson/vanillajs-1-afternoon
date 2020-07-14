console.log(`The house always wins`)

const setId = document.getElementById(`idInput`)
const setColor = document.getElementById(`colorInput`)

console.log(`setId`)
console.log(`setColor`)

function setCard() {
    const card = document.getElementById(idInput.value);
    // console.log(card)
    card.style.color = colorInput.value;
}