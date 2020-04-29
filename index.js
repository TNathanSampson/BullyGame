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
  dealCards(st);
  dealPlayerHand(st);
}

//Event Listeners: Page Buttons
function displayInstructions(st) {
  if (st.view === "Home" || st.view === "Board") {
    document
      .querySelector("#instructionButton a")
      .addEventListener("click", event => {
        event.preventDefault();
        window.open("Instructions");
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
        if (deckBack === deckBacks[2]) {
          playerSpades.back = deckBacks[1];
        } else {
          playerSpades.back = deckBacks[2];
        }
        render(state.Board);
      });
    }
  }
}

function goHome(st) {
  if (
    st.view === "Instructions" ||
    st.view === "Board" ||
    st.view === "ChooseDeck"
  ) {
    document.querySelector(".homeButton a").addEventListener("click", event => {
      event.preventDefault();
      render(state.Home);
    });
  }
}

//Event Listeners: Card Dealers
function dealCards(st) {
  if (st.view === "Board") {
    document.querySelector(".dealDeck").addEventListener("click", function(ev) {
      let deckOfCards = document.getElementById("playerDeck");
      const cardBack = playerHearts.back;
      cardBack.className = "card";

      let deckOfOpCards = document.getElementById("opponentDeck");
      const cardOpBack = playerSpades.back;
      cardOpBack.className = "cardOp";

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

      deckOfOpCards.append(cardOpBack);
      let cardOpBack2 = cardOpBack.cloneNode(true);
      deckOfOpCards.append(cardOpBack2);
      let cardOpBack3 = cardOpBack.cloneNode(true);
      deckOfOpCards.append(cardOpBack3);
      let cardOpBack4 = cardOpBack.cloneNode(true);
      deckOfOpCards.append(cardOpBack4);
      let cardOpBack5 = cardOpBack.cloneNode(true);
      deckOfOpCards.append(cardOpBack5);
      let cardOpBack6 = cardOpBack.cloneNode(true);
      deckOfOpCards.append(cardOpBack6);
      let cardOpBack7 = cardOpBack.cloneNode(true);
      deckOfOpCards.append(cardOpBack7);
      let cardOpBack8 = cardOpBack.cloneNode(true);
      deckOfOpCards.append(cardOpBack8);
      let cardOpBack9 = cardOpBack.cloneNode(true);
      deckOfOpCards.append(cardOpBack9);
      let cardOpBack10 = cardOpBack.cloneNode(true);
      deckOfOpCards.append(cardOpBack10);
      let cardOpBack11 = cardOpBack.cloneNode(true);
      deckOfOpCards.append(cardOpBack11);
      let cardOpBack12 = cardOpBack.cloneNode(true);
      deckOfOpCards.append(cardOpBack12);
      let cardOpBack13 = cardOpBack.cloneNode(true);
      deckOfOpCards.append(cardOpBack13);

      this.className += " invisible";

      let dealHand = document.querySelector(".dealPlayerHand");
      dealHand.className = "dealPlayerHand";
    });
  }
}

function dealPlayerHand(st) {
  if (st.view === "Board") {
    // removeDropListeners(st);
    // let deleteDivs = document.getElementById("playerHand").children;
    // localStorage.removeItem(deleteDivs);
    document
      .querySelector(".dealPlayerHand")
      .addEventListener("click", function(ev) {
        playerHearts.dealHand();
        playerSpades.dealHand();
        let playerDeck = document
          .getElementById("playerDeck")
          .getElementsByTagName("img");
        let opponentDeck = document
          .getElementById("opponentDeck")
          .getElementsByTagName("img");
        let handArray = playerHearts.hand;
        let opHandArray = playerSpades.hand;
        let playerHand = document.getElementById("playerHand");
        let opponentHand = document.getElementById("opponentHand");
        for (let i = 0; i < handArray.length; i++) {
          let cardSource = handArray[i][2];
          let drawnCard = document.createElement("div");
          let cardImage = document.createElement("img");
          drawnCard.className = "handCard";
          drawnCard.draggable = true;
          cardImage.src = cardSource;
          drawnCard.append(cardImage);
          playerHand.append(drawnCard);
          for (let j = 12; j >= playerHearts.deck.length; j--) {
            let deckCard = playerDeck[j];
            deckCard.className += " invisible";
          }
        }
        for (let k = 0; k < opHandArray.length; k++) {
          let opCardSource = opHandArray[k][2];
          let opDrawnCard = document.createElement("div");
          let opCardImage = document.createElement("img");
          opDrawnCard.className = "handCard";
          opDrawnCard.draggable = true;
          opCardImage.src = opCardSource;
          opDrawnCard.append(opCardImage);
          opponentHand.append(opDrawnCard);
          for (let m = 12; m >= playerSpades.deck.length; m--) {
            let opDeckCard = opponentDeck[m];
            opDeckCard.className += " invisible";
          }
        }
        let dealHand = document.querySelector(".dealPlayerHand");
        dealHand.className += " invisible";
        dragNDropListener();
      });
  }
}

//Drag n Drop Listeners
function dragNDropListener() {
  const cardItems = document.querySelectorAll(".handCard");
  const chipItems = document.querySelectorAll(".chip");
  const emptyOuterSquares = document.querySelectorAll(".outerSquares");
  const emptyInnerSquares = document.querySelectorAll(".innerSquares");
  const emptyPile = document.querySelectorAll(".playerDiscardPile");
  //const emptyOpPile = document.querySelectorAll(".opponentDiscardPile");
  // console.log(emptyPile);
  // console.log(emptyOpPile);

  let draggedItem = null;

  for (let c = 0; c < chipItems.length; c++) {
    const chip = chipItems[c];

    chip.addEventListener("dragstart", function(ev) {
      draggedItem = chip;
      setTimeout(function() {
        chip.style.display = "none";
      }, 0);
    });

    chip.addEventListener("dragend", function() {
      setTimeout(function() {
        draggedItem.style.display = "block";
        draggedItem = null;
      }, 0);
    });
  }

  for (let i = 0; i < cardItems.length; i++) {
    const card = cardItems[i];

    card.addEventListener("dragstart", function(ev) {
      draggedItem = card;
      setTimeout(function() {
        card.style.display = "none";
      }, 0);
    });

    card.addEventListener("dragend", function() {
      setTimeout(function() {
        draggedItem.style.display = "block";
        draggedItem = null;
      }, 0);
    });
  }

  for (let j = 0; j < emptyOuterSquares.length; j++) {
    const square = emptyOuterSquares[j];

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
      draggedItem.classList.remove = "hovered";
      this.append(draggedItem);
      //console.log(playerHearts.hand);
      for (let m = 0; m < playerHearts.hand.length; m++) {
        if (
          draggedItem.getElementsByTagName("img")[0].src ===
          playerHearts.hand[m][2]
        ) {
          playerHearts.hand.splice(m, 1);
        }
      }
      for (let n = 0; n < playerSpades.hand.length; n++) {
        if (
          draggedItem.getElementsByTagName("img")[0].src ===
          playerSpades.hand[n][2]
        ) {
          playerSpades.hand.splice(n, 1);
        }
      }
      if (playerHearts.hand.length === 0) {
        let dealHand = document.querySelector(".dealPlayerHand");
        dealHand.className += "dealPlayerHand";
      }
    });
  }
  for (let k = 0; k < emptyInnerSquares.length; k++) {
    const innerSquare = emptyInnerSquares[k];

    innerSquare.addEventListener("dragover", function(ev) {
      ev.preventDefault();
    });
    innerSquare.addEventListener("dragenter", function(ev) {
      ev.preventDefault();
      this.className += " hovered";
    });
    innerSquare.addEventListener("dragleave", function(ev) {
      this.className = "innerSquares";
    });
    innerSquare.addEventListener("drop", function(ev) {
      draggedItem.className = "handCard";
      this.className = "innerSquares";
      this.append(draggedItem);
      //console.log(playerHearts.hand);
      for (let p = 0; p < playerHearts.hand.length; p++) {
        if (
          draggedItem.getElementsByTagName("img")[0].src ===
          playerHearts.hand[p][2]
        ) {
          playerHearts.hand.splice(p, 1);
        }
      }
      for (let n = 0; n < playerSpades.hand.length; n++) {
        if (
          draggedItem.getElementsByTagName("img")[0].src ===
          playerSpades.hand[n][2]
        ) {
          playerSpades.hand.splice(n, 1);
        }
      }
      if (playerHearts.hand.length === 0) {
        let dealHand = document.querySelector(".dealPlayerHand");
        dealHand.className += "dealPlayerHand";
      }
    });
  }
  function opDiscardListener() {
    const emptyOpPile = document.querySelector(".opponentDiscardPile");
    console.log(emptyOpPile);
    emptyOpPile.addEventListener("dragover", function empDragOver(ev) {
      ev.preventDefault();
    });

    emptyOpPile.addEventListener("dragenter", function empDragEnter(ev) {
      ev.preventDefault();
      this.className += " hovered";
    });

    emptyOpPile.addEventListener("dragleave", function empDragLeave(ev) {
      this.className = "opponentDiscardPile";
    });

    emptyOpPile.addEventListener("drop", function empDrop(ev) {
      this.className = "opponentDiscardPile";
      draggedItem.classList.remove = "hovered";
      this.append(draggedItem);
    });
  }
  emptyPile[0].addEventListener("dragover", function empDragOver(ev) {
    ev.preventDefault();
  });

  emptyPile[0].addEventListener("dragenter", function empDragEnter(ev) {
    ev.preventDefault();
    this.className += " hovered";
  });

  emptyPile[0].addEventListener("dragleave", function empDragLeave(ev) {
    this.className = "playerDiscardPile";
  });

  emptyPile[0].addEventListener("drop", function empDrop(ev) {
    this.className = "playerDiscardPile";
    draggedItem.classList.remove = "hovered";
    this.append(draggedItem);
  });
  opDiscardListener();
}

//Player Class

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
    this.chips = [];
  }
  dealHand() {
    function getRandomCard(numOfCards) {
      return Math.floor(Math.random() * Math.floor(numOfCards));
    }
    for (let i = this.hand.length; i < 5 && this.deck.length > 0; i++) {
      let cardsInDeck = this.deck.length;
      let cardNumber = getRandomCard(cardsInDeck);
      this.hand.push(this.deck[cardNumber]);
      let removedCard = this.deck.splice(cardNumber, 1);
    }
  }
}

const playerHearts = new Player("Hearts");
const playerSpades = new Player("Spades");
