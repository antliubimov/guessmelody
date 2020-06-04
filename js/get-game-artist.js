// // get-game-get-artist.js
//
import getHeader from "./get-header";
import {games, initialState} from "./data/data";
import getArtist from "./get-artist";
//
// //const artists = games[`game-artist`].answers.map((artist) => getArtist(artist)).join(``);
//
const gameArtistTemplate = `<section class="game game--artist">
    ${getHeader(initialState)}
    <section class="game__screen">
      <h2 class="game__title">description</h2>
      <div class="game__track">
        <button class="track__button track__button--play" type="button"></button>
        <audio></audio>
      </div>

      <form class="game__artist">
        artists
      </form>
    </section>
  </section>`;

export default gameArtistTemplate;
