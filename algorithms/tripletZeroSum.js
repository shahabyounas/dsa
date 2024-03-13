/**
    * Problem Statement
    Given an array of unsorted numbers, find all unique triplets in it that add up to zero.
    
    Example 1:
    
    Input: [-3, 0, 1, 2, -1, 1, -2]
    Output: [[-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]]
    Explanation: There are four unique triplets whose sum is equal to zero. smallest sum.'
    Example 2:
    
    Input: [-5, 2, -1, -2, 3]
    Output: [[-5, 2, 3], [-2, -1, 3]]
    Explanation: There are two unique triplets whose sum is equal to zero.
 */

class Solution {
    searchTriplets(arr) {
    let triplets = []
    arr.sort((a, b) => a - b)
  
    for(let i = 0; i < arr.length; i++) {
      let  targetSum = -arr[i]
      if(i> 0 && arr[i] == arr[i-1]) { continue }
      
      let start = i + 1
      let end = arr.length - 1;
  
      
      while (start < end) {
        const currentSum = arr[start] + arr[end];
        if (currentSum === targetSum) { 
          triplets.push([-targetSum, arr[start], arr[end]]);
          start += 1;
          end -= 1;
          while (start < end && arr[start] === arr[start - 1]) {
            start += 1; 
          }
          while (start < end && arr[end] === arr[end + 1]) {
            end -= 1;
          }
        } else if (targetSum > currentSum) {
          start += 1; 
        } else {
          end -= 1;
        }
      }
    
    }
    return triplets
    }
  }
  