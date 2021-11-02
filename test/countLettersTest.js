const assert = require('chai').assert;
const countLetters   = require('../countLetters');

describe("#countLetters", () => {
  it("returns 1 for H in LHL", () => {
    assert.strictEqual(countLetters("LHL")["H"],1);
  });
  it("returns 2 for L in LHL", () => {
    assert.strictEqual(countLetters("LHL")["L"],2); 
  });
});