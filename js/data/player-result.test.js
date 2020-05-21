// player-result.test.js

import {assert} from 'chai';
import playerResult from './player-result';

const statistics = [9, 10, 12, 16];

describe(`playerResult`, () => {
  describe(`if a player lost and time is up `, () => {
    it(`should return phrase Время вышло! Вы не успели отгадать все мелодии`, () => {
      assert.equal(`Время вышло! Вы не успели отгадать все мелодии`, playerResult(statistics, {points: 8, notes: 2, time: 0}));
    });
  });
  describe(`if a player lost and attempts failed`, () => {
    it(`should return phrase У вас закончились все попытки. Ничего, повезёт в следующий раз!`, () => {
      assert.equal(`У вас закончились все попытки. Ничего, повезёт в следующий раз!`, playerResult(statistics, {points: 10, notes: -1, time: 100}));
    });
  });
  describe(`if a player has taken a 1st place`, () => {
    it(`should return phrase Вы заняли 1 место из 5 игроков. Это лучше, чем у 80% игроков`, () => {
      assert.equal(`Вы заняли 1 место из 5 игроков. Это лучше, чем у 80% игроков`, playerResult(statistics, {points: 20, notes: 2, time: 30}));
    });
  });
  describe(`if a player has taken a 3th place`, () => {
    it(`should return phrase Вы заняли 3 место из 5 игроков. Это лучше, чем у 40% игроков`, () => {
      assert.equal(`Вы заняли 3 место из 5 игроков. Это лучше, чем у 40% игроков`, playerResult(statistics, {points: 11, notes: 2, time: 50}));
    });
  });
  describe(`if a player has taken a last place`, () => {
    it(`should return phrase Вы заняли 3 место из 5 игроков. Это лучше, чем у 40% игроков`, () => {
      assert.equal(`Вы заняли 5 место из 5 игроков. Это лучше, чем у 0% игроков`, playerResult(statistics, {points: 8, notes: 0, time: 50}));
    });
  });
});
