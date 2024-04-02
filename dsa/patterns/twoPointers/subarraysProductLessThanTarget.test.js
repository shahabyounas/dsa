const {
  subArraysProductLessThanTarget_Sol1,
  subArraysProductLessThanTarget,
} = require("./subarraysProductLessThanTarget");

describe("subArraysProductLessThanTarget", () => {
  test("it should return all the sub arrays with product less than the given target", () => {
    const arr = [2, 5, 3, 10];
    const target = 30;
    const output = [[2], [5], [2, 5], [3], [5, 3], [10]];

    expect(subArraysProductLessThanTarget_Sol1(arr, target)).toEqual(
      expect.arrayContaining(output)
    );

    expect(subArraysProductLessThanTarget([8, 2, 6, 5], 50)).toEqual(
      expect.arrayContaining([[8], [2], [8, 2], [6], [2, 6], [5], [6, 5]])
    );
  });
});
