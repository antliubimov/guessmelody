// artist.js

const artistTemplate = (artist, values) => `<div class="artist">
    <input class="artist__input visually-hidden" type="radio" name="answer" value=${artist} id=${values.answer}>
    <label class="artist__name" for=${values.answer}>
    <img class="artist__picture" src=${values.src}" alt="${values.name}">
    ${values.name}
    </label>
    </div>`;

export default artistTemplate;
