
const { squareSortedArray, squareSortedArrayOp } = require("./squareSortedArr");

test('squareSortedArray', () => {
    const arr = [-2, -1, 0, 2, 3];
    const result = [0, 1, 4, 4, 9]
    expect(squareSortedArray(arr)).toEqual(result)
})

test('squareSortedArrayOP', () => {
    const arr = [-2, -1, 0, 2, 3];
    const result = [0, 1, 4, 4, 9]
    expect(squareSortedArrayOp(arr)).toEqual(result)
})