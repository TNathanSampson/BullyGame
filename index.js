class Player {
  constructor(deck) {
    this.deck = [
      [2, `Two of  ${deck}`],
      [3, `Three of  ${deck}`],
      [4, `Four of  ${deck}`],
      [5, `Five of  ${deck}`],
      [6, `Six of  ${deck}`],
      [7, `Seven of  ${deck}`],
      [8, `Eight of  ${deck}`],
      [9, `Nine of  ${deck}`],
      [10, `Ten of  ${deck}`],
      [11, `Jack of  ${deck}`],
      [12, `Queen of  ${deck}`],
      [13, `King of  ${deck}`],
      [14, `Ace of  ${deck}`]
    ];
    this.hand = [];
    this.discardPile = [];
    this.chips = 0;
  }
  dealHand() {
    for (let i = 0; i < 5 && this.deck.length > 0; ++i) {
      let cardsInDeck = this.deck.length;
      function getRandomCard(numOfCards) {
        return Math.floor(Math.random() * Math.floor(numOfCards));
      }
      let cardNumber = getRandomCard(cardsInDeck);
      this.hand.push(this.deck[cardNumber]);
      let removedCard = this.deck.splice(cardNumber, 1);
    }
  }
}

//Player Objects
const playerSpades = new Player("Spades");
const playerClubs = new Player("Clubs");
const playerHearts = new Player("Hearts");
const playerDiamonds = new Player("Diamonds");
const playerBully = new Player("Rooks");

//Original Deal Hand Function with "While" Loop
/*
function dealHand(Player) {
  while (Player.hand.length < 5 && Player.deck.length > 0) {
    let cardsInDeck = Player.deck.length;
    function getRandomCard(numOfCards) {
      return Math.floor(Math.random() * Math.floor(numOfCards));
    }
    let cardNumber = getRandomCard(cardsInDeck);
    //console.log(cardNumber);
    Player.hand.push(Player.deck[cardNumber]);
    let removedCard = Player.deck.splice(cardNumber, 1);
  }
}

//New For Loop dealHand Function
function dealHand(Player) {
  for (let i = 0; i < 5 && Player.deck.length > 0; ++i) {
    let cardsInDeck = Player.deck.length;
    function getRandomCard(numOfCards) {
      return Math.floor(Math.random() * Math.floor(numOfCards));
    }
    let cardNumber = getRandomCard(cardsInDeck);
    //console.log(cardNumber);
    Player.hand.push(Player.deck[cardNumber]);
    let removedCard = Player.deck.splice(cardNumber, 1);
  }
}
*/

//Here is where I tested how my Player Classes worked.....
// playerSpades.dealHand();

// console.log("Your Deck: \n", playerSpades.deck, "\n");
// console.log("Your Hand: \n", playerSpades.hand, "\n");
// console.log("Your Discard Pile: \n", playerSpades.discardPile, "\n");
// console.log(`Your Chips: \n ${playerSpades.chips}`);

// import { Header, Nav, Main, Footer } from "./components";
// import * as state from "./store";

// function render(st = state.Home) {
//   document.querySelector("#root").innerHTML = `
//   ${Header(st)}
//   ${Nav(state.Links)}
//   ${Main(st)}
//   ${Footer()}
// `;
//   addNavEventListeners();
//   addPicOnFormSubmit(st);
// }

// render();

// function addNavEventListeners() {
//   // add event listeners to Nav items for navigation
//   document.querySelectorAll("nav a").forEach(navLink =>
//     navLink.addEventListener("click", event => {
//       event.preventDefault();
//       render(state[event.target.title]);
//     })
//   );
//   // add menu toggle to bars icon in nav bar
//   document
//     .querySelector(".fa-bars")
//     .addEventListener("click", () =>
//       document.querySelector("nav > ul").classList.toggle("hidden--mobile")
//     );
// }

// function addPicOnFormSubmit(st) {
//   if (st.view === "Form") {
//     document.querySelector("form").addEventListener("submit", event => {
//       event.preventDefault();
//       // convert HTML elements to Array
//       let inputList = Array.from(event.target.elements);
//       // remove submit button from list
//       inputList.pop();
//       // construct new picture object
//       let newPic = inputList.reduce((pictureObject, input) => {
//         pictureObject[input.name] = input.value;
//         return pictureObject;
//       }, {});
//       // add new picture to state.Gallery.pictures
//       state.Gallery.pictures.push(newPic);
//       render(state.Gallery);
//     });
//   }
// }
