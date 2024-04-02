const { compareStringsWithBackspaces } = require("./compareStringsWithBackspaces");

describe("compareStringsWithBackspaces", () => {
  test("It should compare the given strings while keeping backspaces in view", () => {
    const str1="xy#z", str2="xzz#";

    expect(compareStringsWithBackspaces(str1, str2)).toEqual(true);
  });

});
