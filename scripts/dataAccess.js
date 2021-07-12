const mainContainer = document.querySelector("#container");

const API = " http://localhost:3000";

const applicationState = {
  letters: {},
};
export const fetchLetters = () => {
  return fetch(`${API}/letters`) // will output data as json string
    .then((res) =>
      res
        .json() // takes output and inputs it as "res" for readable data in json
        .then((allLetters) => {
          // takes json data and inputs it as "allLetters"
          applicationState.letters = allLetters;
        })
    );
};
export const getLetters = () => {
  return applicationState.letters.map((letter) => ({ ...letter }));
};

let topics = [];
export const fetchTopics = () => {
  return fetch(`${API}/topics`)
    .then((res) => res.json())
    .then((allTopics) => {
      topics = allTopics;
    }); 
};
export const getTopics = () => {
  return topics.map(topic => ({...topic}));
};

export const sendNewLetter = (submitLetter) => {
  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(submitLetter),
  };

  return fetch(`${API}/letters`, fetchOptions)
    .then(res => res.json())
    .then(res => {
      applicationState.letters.push(res)
      document.dispatchEvent(new CustomEvent("stateChanged"))
    })}