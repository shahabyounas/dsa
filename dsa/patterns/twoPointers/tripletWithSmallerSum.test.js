const { tripletWithSmallerSum } = require("./tripletWithSmallerSum");


describe('tripletWithSmallerSum', () => {

    test('it should return count of triplets whose sum is less than target', () => {
        const arr = [-1, 0, 2, 3]
        const target = 3
        const output = 2
        expect(tripletWithSmallerSum(arr, target)).toEqual(output)
       expect(tripletWithSmallerSum([-1, 4, 2, 1, 3], 5)).toEqual(4)
    })
})



