import { Header, Main, Footer } from "./components";
import * as state from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";

const router = new Navigo(window.location.origin);
router
  .on({
    ":page": params => render(state[capitalize(params.page)]),
    "/": () => render(state.Home)
  })
  .resolve();

function render(st = state.Home) {
  document.querySelector("#root").innerHTML = `
  ${Header(st)}
  ${Main(st)}
  ${Footer()}
`;
  displayInstructions(st);
  chooseYourDeck(st);
  playTheGame(st);
  goHome(st);
  fillListenerTwo();
  dealCards(st);
}

//Event Listeners
function displayInstructions(st) {
  if (st.view === "Home") {
    document
      .querySelector("#instructionButton a")
      .addEventListener("click", event => {
        event.preventDefault();
        render(state.Instructions);
      });
  }
}

function chooseYourDeck(st) {
  if (st.view === "Home") {
    document
      .querySelector("#callToAction a")
      .addEventListener("click", event => {
        event.preventDefault();
        render(state.ChooseDeck);
      });
  }
}

//New playTheGame Listener
function playTheGame(st) {
  if (st.view === "ChooseDeck") {
    const deckBacks = document.querySelectorAll(".deck");
    let clickedDeck = null;
    for (let i = 0; i < deckBacks.length; i++) {
      const deckBack = deckBacks[i];

      deckBack.addEventListener("click", function(ev) {
        event.preventDefault();
        clickedDeck = deckBack;
        // setTimeout(function() {
        //   .style.display = "none";
        playerHearts.back = deckBack;
        //console.log(playerHearts.deck);
        render(state.Board);
      });
    }
  }
}

function goHome(st) {
  if (st.view === "Instructions" || st.view === "Board") {
    document.querySelector(".homeButton a").addEventListener("click", event => {
      event.preventDefault();
      render(state.Home);
    });
  }
}

function dealCards(st) {
  if (st.view === "Board") {
    document.querySelector(".dealDeck").addEventListener("click", function(ev) {
      let deckOfCards = document.getElementById("playerDeck");
      const cardBack = playerHearts.back;
      cardBack.className = "card";
      deckOfCards.append(cardBack);
      let cardBack2 = cardBack.cloneNode(true);
      deckOfCards.append(cardBack2);
      let cardBack3 = cardBack.cloneNode(true);
      deckOfCards.append(cardBack3);
      let cardBack4 = cardBack.cloneNode(true);
      deckOfCards.append(cardBack4);
      let cardBack5 = cardBack.cloneNode(true);
      deckOfCards.append(cardBack5);
      let cardBack6 = cardBack.cloneNode(true);
      deckOfCards.append(cardBack6);
      let cardBack7 = cardBack.cloneNode(true);
      deckOfCards.append(cardBack7);
      let cardBack8 = cardBack.cloneNode(true);
      deckOfCards.append(cardBack8);
      let cardBack9 = cardBack.cloneNode(true);
      deckOfCards.append(cardBack9);
      let cardBack10 = cardBack.cloneNode(true);
      deckOfCards.append(cardBack10);
      let cardBack11 = cardBack.cloneNode(true);
      deckOfCards.append(cardBack11);
      let cardBack12 = cardBack.cloneNode(true);
      deckOfCards.append(cardBack12);
      let cardBack13 = cardBack.cloneNode(true);
      deckOfCards.append(cardBack13);
      this.className += " invisible";
    });
  }
}

//Fill Listeners
function fillListenerTwo() {
  const cardItems = document.querySelectorAll(".handCard");
  const emptySquares = document.querySelectorAll(".outerSquares");

  let draggedItem = null;

  for (let i = 0; i < cardItems.length; i++) {
    const card = cardItems[i];

    card.addEventListener("dragstart", function(ev) {
      draggedItem = card;
      setTimeout(function() {
        card.style.display = "none";
      });
    });

    card.addEventListener("dragend", function() {
      setTimeout(function() {
        draggedItem.style.display = "block";
        draggedItem = null;
      }, 0);
    });

    for (let j = 0; j < emptySquares.length; j++) {
      const square = emptySquares[j];

      square.addEventListener("dragover", function(ev) {
        ev.preventDefault();
      });
      square.addEventListener("dragenter", function(ev) {
        ev.preventDefault();
        this.className += " hovered";
      });
      square.addEventListener("dragleave", function(ev) {
        this.className = "outerSquares";
      });
      square.addEventListener("drop", function(ev) {
        this.className = "outerSquares";
        this.append(draggedItem);
      });
    }
  }
}

class Player {
  constructor(deck) {
    this.deck = [
      [
        2,
        `Two of  ${deck}`,
        `https://github.com/TNathanSampson/BullyGame/blob/master/images/2_${deck}.png?raw=true`
      ],
      [
        3,
        `Three of  ${deck}`,
        `https://github.com/TNathanSampson/BullyGame/blob/master/images/3_${deck}.png?raw=true`
      ],
      [
        4,
        `Four of  ${deck}`,
        `https://github.com/TNathanSampson/BullyGame/blob/master/images/4_${deck}.png?raw=true`
      ],
      [
        5,
        `Five of  ${deck}`,
        `https://github.com/TNathanSampson/BullyGame/blob/master/images/5_${deck}.png?raw=true`
      ],
      [
        6,
        `Six of  ${deck}`,
        `https://github.com/TNathanSampson/BullyGame/blob/master/images/6_${deck}.png?raw=true`
      ],
      [
        7,
        `Seven of  ${deck}`,
        `https://github.com/TNathanSampson/BullyGame/blob/master/images/7_${deck}.png?raw=true`
      ],
      [
        8,
        `Eight of  ${deck}`,
        `https://github.com/TNathanSampson/BullyGame/blob/master/images/8_${deck}.png?raw=true`
      ],
      [
        9,
        `Nine of  ${deck}`,
        `https://github.com/TNathanSampson/BullyGame/blob/master/images/9_${deck}.png?raw=true`
      ],
      [
        10,
        `Ten of  ${deck}`,
        `https://github.com/TNathanSampson/BullyGame/blob/master/images/10_${deck}.png?raw=true`
      ],
      [
        11,
        `Jack of  ${deck}`,
        `https://github.com/TNathanSampson/BullyGame/blob/master/images/J_${deck}.png?raw=true`
      ],
      [
        12,
        `Queen of  ${deck}`,
        `https://github.com/TNathanSampson/BullyGame/blob/master/images/Q_${deck}.png?raw=true`
      ],
      [
        13,
        `King of  ${deck}`,
        `https://github.com/TNathanSampson/BullyGame/blob/master/images/K_${deck}.png?raw=true`
      ],
      [
        14,
        `Ace of  ${deck}`,
        `https://github.com/TNathanSampson/BullyGame/blob/master/images/A_${deck}.png?raw=true`
      ]
    ];
    this.back = "";
    this.hand = [];
    this.discardPile = [];
    this.chips = 0;
  }
  dealHand() {
    function getRandomCard(numOfCards) {
      return Math.floor(Math.random() * Math.floor(numOfCards));
    }
    for (let i = 0; i < 5 && this.deck.length > 0; i++) {
      let cardsInDeck = this.deck.length;
      let cardNumber = getRandomCard(cardsInDeck);
      this.hand.push(this.deck[cardNumber]);
      let removedCard = this.deck.splice(cardNumber, 1);
    }
  }
}

const playerHearts = new Player("Hearts");

// <div class="handCard" draggable="true"><img src="https://github.com/TNathanSampson/BullyGame/blob/master/images/2_Hearts.png?raw=true"></div>
