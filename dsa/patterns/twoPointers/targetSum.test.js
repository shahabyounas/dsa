
const { targetSum, targetSumOpz } = require("./targetSum");

test('targetSum', () => {
    const arr = [1, 2, 3, 4, 6];
    const target = 6
    expect(targetSum(arr, target)).toEqual([1,3])
    expect(targetSum(arr, target)).not.toEqual([-1,-1])
    expect(targetSumOpz(arr, target)).toEqual([1,3])
})

test('targetSumOpz value 6 is addition of value at index 1 and 3', () => {
    const arr = [1, 2, 3, 4, 6];
    const target = 6
    expect(targetSum(arr, target)).toEqual([1,3])
})

test('targetSumOpz empty array return [-1,-1]', () => {
    const arr = [];
    const target = 6
    expect(targetSum(arr, target)).toEqual([-1,-1])
    expect(targetSum(arr, target)).not.toEqual([1,1])
})