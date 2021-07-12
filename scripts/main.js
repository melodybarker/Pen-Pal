import { PenPalList } from "./PenPalList.js";
import { fetchLetters, fetchTopics } from "./dataAccess.js";
const mainContainer = document.querySelector("#container");

const render = () => {
  fetchLetters().then(() => {
    fetchTopics().then(() => {

      mainContainer.innerHTML = PenPalList();
    })
  })
}


render();

mainContainer.addEventListener("stateChanged", (customEvent) => {
  render();
});
