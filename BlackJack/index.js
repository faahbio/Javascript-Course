let cards = [];
let sum = 0;
let blackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

let player = {
  name: "Faahbio",
  chips: 69,
};

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber === 1) {
    return 11; // Ace
  } else if (randomNumber > 10) {
    return 10; // Face cards (Jack, Queen, King)
  } else {
    return randomNumber; // Number cards
  }
}

function startGame() {
  firstCard = getRandomCard();
  secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  isAlive = true;
  renderGame();
}

function renderGame() {
  sumEl.textContent = "Sum:  " + sum;
  cardsEl.textContent = "Cards: ";

  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + (cards[i + 1] ? ", " : "");
  }

  if (sum <= 20) {
    message = "🤔 Do you want to draw a new card? 🤔";
    messageEl.textContent = message;
  } else if (sum === 21) {
    message = "🎉 Blackjack! 🎉";
    blackJack = true;
    messageEl.textContent = message;
  } else {
    message = "🚫 You're out of the game! 🚫";
    messageEl.textContent = message;
    isAlive = false;
  }
}

function newCard() {
  if (isAlive && !blackJack) {
    let newCard = getRandomCard();
    sum += newCard;
    cards.push(newCard);
    renderGame();
    cardsEl.textContent = "Cards: " + cards.join(", ");
  } else {
    return; // Prevent drawing a new card if the game is over
  }
}

function resetGame() {
  blackJack = false;
  message = "Press Start Game to play again!";
  messageEl.textContent = message;
  sumEl.textContent = "Sum: ";
  cardsEl.textContent = "Cards: ";
}
