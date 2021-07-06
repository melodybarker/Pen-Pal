import { sendNewLetter } from "./dataAccess.js";

const mainContainer = document.querySelector("#container");

mainContainer.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "submitRequest") {
    const authorsIndex =
      document.getElementById("authors").options.selectedIndex;
    const selectedAuthor =
      document.getElementById("authors").options[authorsIndex].text;
    const recipientsIndex =
      document.getElementById("recipients").options.selectedIndex;
    const selectedRecipient =
      document.getElementById("recipients").options[recipientsIndex].text;
    const letter = document.querySelector("input[name = 'letter']").value;
    const topic = document.querySelector("input[name = 'topic']").value;
  }
  const dataToSend = {
    selectedAuthor: authors,
    selectedRecipient: recipients,
    letter: letter,
    topic: topic,
  };
  sendNewLetter(dataToSend);
});

export const LetterOptions = () => {
  const html = `
    <div class = "field">
      <label class = "label" for = "authors">Authors</label>
      <select id = "authors" class = "select">
        <option value = "CSLewis">C.S. Lewis</option>
        <option value = "JKRowling">J.K. Rowling</option>
        <option value = "JAusten">Jane Austen</option>
        <option value = "DrSuess">Dr. Seuss</option>
      </select>
    </div>
    <div class = "field">
      <label class = "label" for = "recipients">Recipient</label>
      <select id = "recipients" class = "select">
        <option value = "melody">Melody Barker</option>
        <option value = "joey">Joey Knight</option>
        <option value = "banjoBoy">Banjo Boy</option>
      </select>
      <div class = "field">
      <label class = "label" for = "letter">Letter</label>
      <input type = "text" id = "letter" name = "letter"/>
      </div>
      <div class = "field">
        <label class = "label" for = "topic">Topic</label>
          <ul>
          <li><input type = "checkbox" id = "topic1" name = "topic" value = "business"/>
          Business</li>
          <li><input type = "checkbox" id = "topic2" name = "topic" value = "friendly"/>
          Friendly</li>
          <li><input type = "checkbox" id = "topic3" name = "topic" value = "family"/>
          Family</li>
          <li><input type = "checkbox" id = "topic4" name = "topic" value = "congrats"/>
          Congratulations</li>
          <li><input type = "checkbox" id = "topic5" name = "topic" value = "condolences"/>
          Condolences</li>
          </ul>

      </div>
      <div class = "field">
    <button class = "button" id = "submitRequest">Send Letter &#9787;</button>
    `;

  return html;
};
