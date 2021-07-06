import { LetterOptions } from "./LetterOptions.js";
import { Letters } from "./Letters.js";

export const PenPalList = () => {
  return `
  <h1>Pen Pal Society</h1>
  <section class = "letterOptions">
    ${LetterOptions()}
  </section>
  <section class = "lettersSent">
  <h1>Letters</h1>
  ${Letters()}
  </section>
  `;
};
