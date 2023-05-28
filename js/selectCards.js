const cards = [...document.querySelectorAll(".cardList__card")]
let planSelected = null;
let cardSelected = null;
let cardSelectedChildValue = null;
let cardSelectedValueHTML = null;
let cardSelectedValueInteger = null;

console.log(cards);

cards.forEach(card => 
    card.addEventListener('click', () => clickedCardAddSelected(card))
)

function clickedCardAddSelected(card) {   
    cleanAllClassesSelected(cards) 
    console.log("I've clicked on the card: ", card);    
    card.classList.add('selected')
    cardSelected = card
    planSelected = card.id    
    getCardSelectedValue()
}

function cleanAllClassesSelected(cards) {
    cards.forEach(card => card.classList.remove('selected'))
}

function getCardSelectedValue() {
    cardSelectedChildValue = cardSelected.querySelector(".card__price")
    console.log('cardSelectedChildValue: ',cardSelectedChildValue);
    
    cardSelectedValueHTML = cardSelectedChildValue.innerHTML;
    console.log('cardSelectedChildValueHTML: ', cardSelectedValueHTML);

    transformStrToInt(cardSelectedValueHTML)    
}

function transformStrToInt(cardSelectedValueHTML) {
    let cardSelectedValueString = cardSelectedValueHTML.split(' ');
    console.log('cardSelectedValueString: ', cardSelectedValueString);
    
    cardSelectedValueString.shift()
    console.log('cardSelectedValueString after slice: ', cardSelectedValueString);   

    cardSelectedValueInteger = parseInt(cardSelectedValueString)
    console.log('cardSelectedValueInteger: ', cardSelectedValueInteger,' ',  typeof(cardSelectedValueInteger));    
}
