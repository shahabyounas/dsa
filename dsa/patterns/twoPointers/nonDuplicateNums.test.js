const { nonDuplicateNums } = require('./nonDuplicateNums')

test(" Non duplicate to beginning", () => {
    const arr = [2, 3, 3, 3, 6, 9, 9]
    const resp = 4

    expect(nonDuplicateNums(arr)).toEqual(resp)
    expect(nonDuplicateNums([2, 2, 2, 11])).toEqual(2)
})

test("Check non duplicate array values", () => {
    const arr = [2, 3, 3, 3, 6, 9, 9]
    expect(nonDuplicateNums(arr, 1)).toEqual([2,3,6,9,6,9,9])
})