// get-artist.js

const getArtist = (artist) => `<div class="artist">
    <input class="artist__input visually-hidden" type="radio" name="answer" value=${artist.artist} id=${artist.answer}>
    <label class="artist__name" for=${artist.answer}>
    <img class="artist__picture" src=${artist.src}" alt="${artist.name}">
    ${artist.name}
    </label>
    </div>`;

export default getArtist;
