const { tripletSumCloseToTarget, bubbleSortArr  } = require("./tripletSumCloseToTarget");


describe('check closest triplet sum', () => {

    test('tripletSumCloseToTarget', () => {
        const arr = [-1, 0, 2, 3]
        const target = 3
        const output = 2
        expect(tripletSumCloseToTarget(arr, target)).toEqual(output)
        expect(tripletSumCloseToTarget([0, 0, 1, 1, 2, 6], 5)).toEqual(4)
    })
})



