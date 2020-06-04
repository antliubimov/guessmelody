// get-artist.js

const getArtist = (artist, idx) => `<div class="artist">
    <input class="artist__input visually-hidden" type="radio" name="answer" value="artist-${idx}" id="answer-${idx}">
    <label class="artist__name" for="answer-${idx}">
    <img class="artist__picture" src=${artist.image}" alt="${artist.artist}">
    ${artist.name}
    </label>
    </div>`;

export default getArtist;
