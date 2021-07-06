import { PenPalList } from "./PenPalList.js";
import { fetchLetters } from "./dataAccess.js";
const mainContainer = document.querySelector("#container");

const render = () => {
  fetchLetters().then(() => {
    mainContainer.innerHTML = PenPalList();
  });
};

render();

mainContainer.addEventListener("stateChanged", (customEvent) => {
  render();
});
