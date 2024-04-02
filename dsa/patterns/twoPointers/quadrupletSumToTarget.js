/**
 * Given an unsorted array of numbers and target numbers, find all unique
 * quadruplets in it, whose sum is equal to the target number.
 *
 * @param {Array} arr
 * @return {Array<number>}
 */

// W + X + Y + Z = target

function quadrupletSumTarget(arr, target) {
  arr.sort((a, b) => a - b);

  let result = [];

  for (let i = 0; i < arr.length - 3; i++) {
    if (i > 0 && arr[i] == arr[i - 1]) {
      continue;
    }

    for (let j = i + 1; j < arr.length - 2; j++) {
      if (j > i + 1 && arr[j] == arr[j - 1]) {
        continue;
      }

      let first = arr[i];
      let second = arr[j];
      let left = j + 1;
      let right = arr.length - 1;

      while (left < right) {
        let currentSum = first + second + arr[left] + arr[right];

        if (currentSum == target) {
          result.push([first, second, arr[left], arr[right]]);
          left++;
          right--;

          while (left < right && arr[left] === arr[left - 1]) {
            left++;
          }
          while (left < right && arr[right] === arr[right + 1]) {
            right++;
          }
        } else if (currentSum > target) {
          right--;
        } else {
          left++;
        }
      }
    }
  }
  return result;
}

module.exports = {
  quadrupletSumTarget,
};
