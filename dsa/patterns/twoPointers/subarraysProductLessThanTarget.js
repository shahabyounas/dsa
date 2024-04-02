/**
 * Given an array with positive numbers and a positive target numbers, find
 * all of its contiguous subarrays whose product is less then the target number
 * 
 * @param {Array} arr 
 * @param {Number} target 
 * @returns {Array<Array>}
 */

function subArraysProductLessThanTarget_Sol1(arr, target){

    const result = []
    let product = 1

    for(let i = 0; i<arr.length; i++){
        product *= arr[i]
        if(product < target){
            result.push([arr[i]])
        }

        for(let j = i + 1; j < arr.length; j++){
            product *= arr[j]
            if(product < target){
                let k = i
                let subArr = []
                while(k <= j){
                    subArr.push(arr[k])
                    k++
                }
                result.push(subArr)
            }
        }
        product = 1
    }

    return result
}

function subArraysProductLessThanTarget(arr, target){
    let result = []
    let product = 1
    let left = 0
    let right = 0

    while(right < arr.length) {
        product *= arr[right]

        while(product >= target && left <= right){
            product /= arr[left]
            left++
        }

        const subArr = []

        for(let i = right; i >= left; i-- ){
            subArr.unshift(arr[i])
            result.push([...subArr])
        }
        right++
    }

    return result
}


module.exports = {
    subArraysProductLessThanTarget_Sol1,
    subArraysProductLessThanTarget
}