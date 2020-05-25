// track.js

const trackTemplate = (answer) => `<div class="track">
          <button class="track__button track__button--play" type="button"></button>
          <div class="track__status">
            <audio></audio>
          </div>
          <div class="game__answer">
            <input class="game__input visually-hidden" type="checkbox" name="answer" value=${answer} id=${answer}>
            <label class="game__check" for=${answer}>Отметить</label>
          </div>
        </div>`;

export default trackTemplate;

