// change-screen.js

const main = document.querySelector(`.main`);

const changeScreen = (element) => {
  main.innerHTML = ``;
  main.appendChild(element);
};

export default changeScreen;
