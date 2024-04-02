/**
 * Given an unsorted numbers list and a target, find triplet
 * in the array whose sum is closet to the target number, return sum of triplet
 * 
 * @param {Array<number>} arr 
 * @param {Number} target
 */

function tripletSumCloseToTarget(arr, target){
    if(!arr.length && arr.length < 3){
        return undefined
    }

    arr.sort((a, b) => a - b)
    let closestDiff = Infinity

    for(let i = 0; i < arr.length; i++){
        let x = arr[i]
        let left = i + 1
        let right = arr.length - 1

        while(left < right){
            let tripletSum = x + arr[left] + arr[right]
            let diff = target - tripletSum

            if(diff === 0) return target

            if(Math.abs(diff) < Math.abs(closestDiff) ||(
                Math.abs(closestDiff) === Math.abs(diff) && closestDiff < diff
            ) ){
                closestDiff = diff
            }

            if(diff > 0){
                left++
            }else {
                right--
            }
        }
    }
    return target - closestDiff

}

module.exports = {
    tripletSumCloseToTarget,
}