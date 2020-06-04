// get-track.js

const getTrack = (answer, idx) => `<div class="track">
          <button class="track__button track__button--play" type="button"></button>
          <div class="track__status">
            <audio src=${answer.src}></audio>
          </div>
          <div class="game__answer">
            <input class="game__input visually-hidden" type="checkbox" name="answer" value="answer-${idx + 1}" id="answer-${idx + 1}">
            <label class="game__check" for="answer-${idx + 1}">Отметить</label>
          </div>
        </div>`;

export default getTrack;

