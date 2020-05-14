import changeScreen from "./changeScreen";
import welcome from "./welcome";

const backToWelcome = () => {
  changeScreen(welcome);
};

const replayGame = (element, btnClass) => {
  const resultReplay = element.querySelector(btnClass);
  resultReplay.addEventListener(`click`, backToWelcome);
};

export default replayGame;
