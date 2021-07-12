import { LetterOptions } from "./LetterOptions.js";
import { Letters } from "./Letters.js";
import { sendNewLetter } from "./dataAccess.js"


// document.addEventListener("click",
// (event) => {
//   if(event.target.id === "submitRequest")
//   sendNewLetter()
// })

export const PenPalList = () => {
  return `
  <h1>Pen Pal Society</h1>
  <section class = "letterOptions">
    ${LetterOptions()}
  </section>

  </div>
  </select>

  <h1>Letters</h1>
  ${Letters()}
  </section>
  `;
};
