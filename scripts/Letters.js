import { getLetters } from "./dataAccess.js";

export const Letters = () => {
  let html = "<ul>"

  const letters = getLetters();

  html += letters.map(letter => {
    return `<li>
    ${letter.letter}
    ${letter.author}
    ${letter.topic}
    ${letter.recipient}
    </li>
    `
  }).join("")
  html += "</ul>"

  return html
}