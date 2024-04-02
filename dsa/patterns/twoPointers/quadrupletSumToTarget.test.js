const { quadrupletSumTarget } = require("./quadrupletSumToTarget");

describe("quadrupletSumTarget", () => {
  test("It should return unique quadruplets arrays 1", () => {
    const arr = [4, 1, 2, -1, 1, -3];
    const target = 1;
    const output = [
      [-3, -1, 1, 4],
      [-3, 1, 1, 2],
    ];

    expect(quadrupletSumTarget(arr, target)).toEqual(
      expect.arrayContaining(output)
    );
  });

  test("It should return unique quadruplets arrays 2", () => {
    const arr = [2, 0, -1, 1, -2, 2];
    const target = 2;
    const output = [
      [-2, 0, 2, 2],
      [-1, 0, 1, 2],
    ];

    expect(quadrupletSumTarget(arr, target)).toEqual(
      expect.arrayContaining(output)
    );
  });
});
