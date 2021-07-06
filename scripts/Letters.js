import { getLetters } from "./dataAccess.js";

export const Letters = () => {
  const letters = getLetters();

  let html = `<ul>
  ${letters
    .map((letter) => {
      return `<li>
    ${letter.letter}
    ${letter.recipient}

    </li>`;
    })
    .join("")}
</ul>
    `;
  return html;
};
