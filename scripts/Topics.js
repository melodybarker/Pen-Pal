const mainContainer = document.querySelector("#container");

const API = " http://localhost:3000";

export const fetchTopics = () => {
  return fetch(`${API}/topics`)
    .then((res) => res.json())
    .then((serviceRequests) => {
      applicationState.topics = serviceRequests;
    });
};

export const getTopics = () => {
  return applicationState.topics.map((topic) => ({...topic}))};

const Topics = () => {
  const topics = getTopics
  let html = `<ul>
  ${topics
    .map((topic) => {
      return `<li>
      ${topic.name}
      </li>`
    })
    .joing("")}
    </ul>
  `
}
