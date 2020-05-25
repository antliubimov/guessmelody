// data.js

const initialState = {
  lives: 3,
  time: {
    mins: 5,
    secs: 0,
  }
};

const games = {
  'game-genre': {
    description: `Выберите инди-рок треки`,
    answers: [`answer-1`, `answer-2`, `answer-3`, `answer-4`]
  },
  'game-artist': {
    description: `Кто исполняет эту песню?`,
    answers: [
      {
        artist: `artist-1`,
        answer: `answer-1`,
        name: `Пелагея`,
        src: `http://placehold.it/134x134`,
      },
      {
        artist: `artist-2`,
        answer: `answer-2`,
        name: `Краснознаменная дивизия имени моей бабушки`,
        src: `http://placehold.it/134x134`,
      },
      {
        artist: `artist-3`,
        answer: `answer-3`,
        name: `Lorde`,
        src: `http://placehold.it/134x134`,
      }
    ],
  }
};

export {initialState, games};
