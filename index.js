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
  const fill = document.querySelector(".handCard");
  const empties = document.querySelectorAll(".empty");

  fill.addEventListener("dragstart", dragStart);
  fill.addEventListener("dragend", dragEnd);

  // Loop Through empties and call drag events

  //Drag Functions
  function dragStart() {
    this.className += " hold";
    setTimeout(() => (this.className = "invisible"), 0);
  }

  function dragEnd() {
    this.className = "handCard";
  }
}
