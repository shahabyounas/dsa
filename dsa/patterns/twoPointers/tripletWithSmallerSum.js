/**
 * Find the triplets with sum smaller than given targets
 * @param {Array} arr 
 * @param {Number} target 
 * @returns {Number} count
 */


function tripletWithSmallerSum(arr, target){
    let count = 0
    arr.sort((a, b) =>  a - b)

    for(let i = 0; i < arr.length; i++){
        let x = arr[i]
        let left = i + 1
        let right = arr.length - 1

        while(left < right){
            let sum = x + arr[left] + arr[right]

            if(sum < target){
                count += right - left
                left++
            }else {
                right--
            }
        }
    }
    return count
}


module.exports = {
    tripletWithSmallerSum
}