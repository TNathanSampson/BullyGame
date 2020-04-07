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
  fillListeners();
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

function fillListeners() {
  //Fill Listeners
  const fill = document.querySelectorAll(".handCard");
  const empties = document.querySelectorAll(".outerSquares");

  fill.forEach(card => card.addEventListener("dragstart", dragStart));
  fill.forEach(card => card.addEventListener("dragend", dragEnd));

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
    this.className = "handCard";
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
    console.log(fill);
  }
}
