import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";

function render(st = state.Home) {
  document.querySelector("#root").innerHTML = `
  ${Header(st)}
  ${Nav(state.Links)}
  ${Main(st)}
  ${Footer()}
`;
  // addNavEventListeners();
  // addPicOnFormSubmit(st);
}

render(state.Instruction);
