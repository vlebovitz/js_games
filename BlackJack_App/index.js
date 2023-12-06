//create the player object
let player = {
    name: "Vincent",
    chips: 145
}


//initialize variables
let cards = [] //array - ordered list
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

//create tags
let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById('cards-el')
let sumEl = document.getElementById('sum-el')
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name+": $"+player.chips



function renderGame() {
    sumEl.textContent = "Sum: "+ sum
    //for loop to iterate through cards array
    cardsEl.textContent = "Cards: "
    for (let i = 0; i<cards.length; i++){
       cardsEl.textContent += cards[i] + " " 
    }

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function getRandomCard() {
    let randomNumber = Math.floor((Math.random() * 13) + 1)
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }  
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let new_card = getRandomCard()
        sum += new_card
        cards.push(new_card)
        renderGame()
    }
    
}

