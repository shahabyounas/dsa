
const { tripletSumToZero  } = require("./tripletSumToZero");

test('tripletSumToZero', () => {
    const arr = [-3, 0, 1, 2, -1, 1, -2];
    const result = [[-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]]
    expect(tripletSumToZero(arr)).toEqual(result)
})
