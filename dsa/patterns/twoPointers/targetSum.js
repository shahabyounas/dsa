function targetSum(arr, target){
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            let currentSum = arr[i] + arr[j]
            if(currentSum == target){
                return [i, j]
            }
        }
    }
    return [-1, -1]
}

function targetSumOpz(arr, target){
    let start = 0;
    let end = arr.length -1;

    while(start < end){
        let currentSum = arr[start] + arr[end]
        if(currentSum == target){
            return [start, end]
        }
        else if(target > currentSum){
            start++
        }else {
            end--
        }
    }
    return [-1, -1]
}

module.exports = {
   targetSum,
   targetSumOpz 
}

