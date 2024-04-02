const { dutchNationalFlag, dutchNationalFlag_Sol1 } = require("./dutchNationalFlag");

describe("dutchNationalFlag", () => {
  test("It should sort the array in place", () => {
    const arr = [1, 0, 2, 1, 0];
    const output = [0, 0, 1, 1, 2];

    expect(dutchNationalFlag(arr)).toEqual(output);
  });

  test("It should sort array in place", () => {
    const arr = [1, 0, 2, 1, 0];
    const output = [0, 0, 1, 1, 2];

    expect(dutchNationalFlag_Sol1(arr)).toEqual(output);
  });

});
