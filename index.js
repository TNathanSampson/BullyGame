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
  //fillListenerOne();
  fillListenerTwo();
  // addNavEventListeners();
  // addPicOnFormSubmit(st);
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

function fillListenerOne() {
  //Fill Listeners
  const fill = document.querySelector(".handCardOne");
  const empties = document.querySelectorAll(".outerSquares");

  fill.addEventListener("dragstart", dragStart);
  fill.addEventListener("dragend", dragEnd);

  // Loop Through empties and call drag events
  for (const empty of empties) {
    empty.addEventListener("dragover", dragOver);
    empty.addEventListener("dragenter", dragEnter);
    empty.addEventListener("dragleave", dragLeave);
    empty.addEventListener("drop", dragDrop);
  }
  //Drag Functions
  function dragStart() {
    this.className += " hold";
    setTimeout(() => (this.className = "invisible"), 0);
  }

  function dragEnd() {
    this.className = "handCardOne";
  }

  function dragOver(ev) {
    ev.preventDefault();
  }

  function dragEnter(ev) {
    ev.preventDefault();
    this.className += " hovered";
  }

  function dragLeave() {
    this.className = "outerSquares";
  }
  //Store the Click here
  function dragDrop() {
    this.className = "outerSquares";
    this.append(fill);
  }
}

function fillListenerTwo() {
  //Fill Listeners
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
      });
      square.addEventListener("drop", function(ev) {
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
