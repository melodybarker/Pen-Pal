const mainContainer = document.querySelector("#container");

const API = " http://localhost:3000";

const applicationState = {
  letters: {},
};
// fetching the database and turning the string into an array
export const fetchLetters = () => {
  return fetch(`${API}/letters`)
    .then((res) => res.json())
    .then((serviceRequests) => {
      applicationState.letters = serviceRequests;
    });
};

export const getLetters = () => {
  return applicationState.letters.map((letter) => ({ ...letter }));
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
    .then((res) => res.json())
    .then(() => {
      mainContainer.dispatchEvent(new CustomEvent("stateChanged"));
    });
};
