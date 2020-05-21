// check-game-data.test.js

import {assert} from 'chai';
import checkGameData from './check-game-data';

describe(`checkGameData`, () => {
  describe(`if the player answered less than 10 question`, () => {
    it(`should return -1`, () => {
      assert.equal(-1, checkGameData([[0, 20], [1, 30], [1, 50], [0, 20], [1, 50], [0, 30]], -1));
    });
  });
  describe(`if the player answered all right in middle time`, () => {
    it(`should return 10`, () => {
      assert.equal(10, checkGameData([[1, 30], [1, 30], [1, 30], [1, 30], [1, 30], [1, 30], [1, 30], [1, 30], [1, 30], [1, 30]], 2));
    });
  });
  describe(`if the player answered all right and fast`, () => {
    it(`should return 20`, () => {
      assert.equal(20, checkGameData([[1, 5], [1, 15], [1, 15], [1, 15], [1, 15], [1, 15], [1, 15], [1, 15], [1, 15], [1, 15]], 2));
    });
  });
  describe(`if the player answered 50%-fast and 50%-slow`, () => {
    it(`should return 15`, () => {
      assert.equal(15, checkGameData([[1, 5], [1, 15], [1, 15], [1, 15], [1, 15], [1, 35], [1, 30], [1, 31], [1, 32], [1, 35]], 2));
    });
  });
  describe(`if the player answered all on middle time and 2 errors`, () => {
    it(`should return 4`, () => {
      assert.equal(4, checkGameData([[1, 30], [1, 30], [1, 30], [1, 30], [0, 30], [1, 30], [1, 30], [1, 30], [0, 30], [1, 30]], 0));
    });
  });
});
