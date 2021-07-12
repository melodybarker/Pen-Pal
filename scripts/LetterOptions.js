import { sendNewLetter } from "./dataAccess.js";
import { Topics } from "./Topics.js"

const mainContainer = document.querySelector("#container");

document.addEventListener("change",
(event) => {
  if(event.target.id === "submitNewLetter")
  sendNewLetter()
})


mainContainer.addEventListener("click", (event) => {
  if (event.target.id === "submitNewLetter") {
    const authorsIndex =
      document.getElementById("authors").options.selectedIndex;
    const selectedAuthor =
      document.getElementById("authors").options[authorsIndex].text;
    const recipientsIndex =
      document.getElementById("recipients").options.selectedIndex;
    const selectedRecipient =
      document.getElementById("recipients").options[recipientsIndex].text;
    const letter = document.querySelector("input[name = 'letter']").text;
    const topic = document.querySelector("input[name='topic']").value
  }
  const dataToSend = {
    selectedAuthor: authors,
    selectedRecipient: recipients,
    letter: letter,
    topic: topic,
    date: Date(Date.now)
  };
  sendNewLetter(dataToSend);
});

export const LetterOptions = () => {
  const html = `
    <div class = "field">
      <label class = "label" for = "authors">Authors</label>
      <select id = "authors" class = "select">
        <option value ="melodyb">Melody Barker</option>
        <option value = "joeyk">Joey Knight</option>
        <option value = "banjob">Banjo Boy</option>
      </select>
    </div>
    <div class = "field">
      <label class = "label" for = "recipients">Recipient</label>
      <select id = "recipients" class = "select">
        <option value = "melody">Melody Barker</option>
        <option value = "joey">Joey Knight</option>
        <option value = "banjoBoy">Banjo Boy</option>
      </select>
    </div>
    <div class = "field">
      <label class = "label" for = "letter">Letter</label>
      <input type = "text" id = "letter" name = "letter"/>
    </div>
    <div class="field">
      <label class="topics">Topics</label>
      ${Topics()}
    </div>
    <section class = "submitLetter">
      <button class = "button" id = "submitNewLetter">Send Letter &#9787;
    </button>
    </section>
    `;

  return html;
};
