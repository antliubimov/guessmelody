// main.js
'use strict';

const arrowsHtml = `<div class="arrows__wrap">
    <style>
      .arrows__wrap {
        position: absolute;
        top: 135px;
        left: 50%;
        margin-left: -56px;
      }
      .arrows__btn {
        background: none;
        border: 2px solid black;
        padding: 5px 20px;
      }
    </style>
    <button class="arrows__btn"><-</button>
    <button class="arrows__btn">-></button>
</div>`;

const app = document.querySelector(`.app`);
app.innerHTML += arrowsHtml;

const main = document.querySelector(`.main`);
const templates = [...document.querySelectorAll(`template`)];
const arrowButtons = [...document.querySelectorAll('.arrows__btn')];

const render = (template) => {
  let div = document.createElement(`div`);
  div.innerHTML = template.innerHTML.trim();
  return div;
};

const changeScreen = (element) => {
  main.innerHTML = ``;
  main.appendChild(element);
};

let index = -1;

const nextScreen = () => {
  index++;
  if (index === templates.length) {
    index = 0;
  }
  changeScreen(render(templates[index]));
};

const prevScreen = () => {
  index--;
  if (index < 0) {
    index = templates.length - 1;
  }
  changeScreen(render(templates[index]));
};

const arrowDown = (e) => {
  if (e.key === `ArrowRight` || e.target.innerText === `->`) {
    nextScreen();
  } else if (e.key === `ArrowLeft` || e.target.innerText === `<-`) {
    prevScreen();
  }
};

document.addEventListener('keydown', arrowDown);
arrowButtons.forEach((arrowBtn) => arrowBtn.addEventListener('click', arrowDown));
