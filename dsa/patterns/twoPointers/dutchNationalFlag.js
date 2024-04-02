/**
Given an array containing 0s, 1s and 2s, sort the array in-place. 
You should treat numbers of the array as objects, hence,
 we can’t count 0s, 1s, and 2s to recreate the array.
The flag of the Netherlands consists of three colors: red, white and blue; 
and since our input array also consists of three different numbers that 
is why it is called Dutch National Flag problem.
 * 
 * @param {Array<number>} arr 
 * @return {Array} 
 */

function dutchNationalFlag_Sol1(arr){

    let end = arr.length - 1

    for(let i = 0; i < arr.length; i++){
        let start = i + 1

        while(start <= end){
            if(arr[start] < arr[i]){
                let temp = arr[i]
                arr[i] = arr[start]
                arr[start] = temp
            }
            start++
        }
    }
    return arr
}

function dutchNationalFlag(arr){

    function swap(arr, indexOne, IndexTwo){
        [arr[indexOne], arr[IndexTwo]] = [arr[IndexTwo], arr[indexOne]] 
    }

    let low = 0
    let high = arr.length - 1

    for(let i = 0; i <= high;){
        if(arr[i] == 0){
            swap(arr, low, i)
            low++
            i++
        }else if(arr[i] == 2){
            swap(arr, high, i)
            high--
        }else {
            i++
        }
    }
    return arr
}



module.exports = {
    dutchNationalFlag_Sol1,
    dutchNationalFlag,
}