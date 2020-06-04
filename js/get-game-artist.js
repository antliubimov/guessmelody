// // get-game-get-artist.js
//
import {initialState, data} from "./data/data";
import getRandomTracks from "./get-random-tracks";
import getHeader from "./get-header";
import getArtist from "./get-artist";

const randomTracks = getRandomTracks(data, 3);
const track = randomTracks[Math.floor(Math.random() * 3)];
const artists = randomTracks.map((artist, idx) => getArtist(artist, idx)).join(``);

const gameArtistTemplate = `<section class="game game--artist">
    ${getHeader(initialState)}
    <section class="game__screen">
      <h2 class="game__title">Кто исполняет эту песню?</h2>
      <div class="game__track">
        <button class="track__button track__button--play" type="button"></button>
        <audio src=${track.src}></audio>
      </div>

      <form class="game__artist">
        ${artists}
      </form>
    </section>
  </section>`;

export default gameArtistTemplate;
