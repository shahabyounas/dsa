/**
 * Accept sorted array, square all the elements and return new list sorted order
 * @param {Array<number>} nums 
 * @returns {Array}
 */

// Brute force solution
function squareSortedArray(nums){
    const squaredNums = nums.map((num) => num * num)
    return squaredNums.sort((a, b) => a - b)
}

// O(N) solution
function squareSortedArrayOp(nums){
    let left = 0
    let right = nums.length - 1
    let highest = nums.length - 1
    let result = []

    function getSquare(num){
        return num * num
    }

    while(left <= right){
        const leftVal = getSquare(nums[left])
        const rightVal = getSquare(nums[right])

        if(leftVal > rightVal){
            result[highest] = leftVal
            left++
        }
        else {
            result[highest] = rightVal
            right--
        }

        highest--
    }
    return result
}

module.exports = {
    squareSortedArray,
    squareSortedArrayOp
}