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

function playTheGame(st) {
  if (st.view === "ChooseDeck") {
    document.querySelectorAll("#chooseDeck a").forEach(imageLink =>
      imageLink.addEventListener("click", event => {
        event.preventDefault();
        render(state.Board);
      })
    );
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
// const fillTwo = document.querySelector(".handCardTwo");
// const fillThree = document.querySelector(".handCardThree");
// const fillFour = document.querySelector(".handCardFour");
// const fillFive = document.querySelector(".handCardFive");

// fillTwo.addEventListener("dragstart", dragStart);
// fillTwo.addEventListener("dragend", dragEnd);
// fillThree.addEventListener("dragstart", dragStart);
// fillThree.addEventListener("dragend", dragEnd);
// fillFour.addEventListener("dragstart", dragStart);
// fillFour.addEventListener("dragend", dragEnd);
// fillFive.addEventListener("dragstart", dragStart);
// fillFive.addEventListener("dragend", dragEnd);
