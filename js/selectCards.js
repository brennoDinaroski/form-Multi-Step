const cards = [...document.querySelectorAll(".cardList__card")]

console.log(cards);

cards.forEach(card => 
    card.addEventListener('click', () => clickedCard(card))
)

function clickedCard(card) {   
    cleanAllClassesSelected(cards) 
    console.log("I've clicked on the card: ", card);    
    card.classList.add('selected')
}

function cleanAllClassesSelected(cards) {
    cards.forEach(card => card.classList.remove('selected'))
}