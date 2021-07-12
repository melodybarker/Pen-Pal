import { getTopics } from "./dataAccess.js"

const topicArray = []
document.addEventListener("change",
  (event) => {
    if (event.target.name === "topics")
     topicArray.push(event.target.value)
  })

export const Topics = () => {
  const topics = getTopics()
  let html = "<ul>"

  html += topics.map(topic => {
      return `<li>
        <input type="checkbox" name="topics" value="${topic.id}" /> ${topic.name}

      </li>`;
  }).join("")

  html += "</ul>"

  return html
}
