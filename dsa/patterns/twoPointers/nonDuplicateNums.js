/**
 * Given sorted array, move all the non-duplicate to beginning of the array in-place.
 * Time Complexity O(N)
 * Space Complexity (1)
 */

function nonDuplicateNums(arr, flag){
    let start = 0
    let nonDuplicateIdx = 0

    while(start < arr.length){
        if(arr[start] != arr[start + 1]){
            arr[nonDuplicateIdx] = arr[start]
            nonDuplicateIdx++
        }
        start++
    }

    // Add flag for testing purpose to verify final arr resp
    if(flag){
        return arr
    }
    return nonDuplicateIdx
}



module.exports = {
    nonDuplicateNums
}