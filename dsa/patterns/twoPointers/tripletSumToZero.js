function tripletSumToZero(arr) {
  arr.sort((a, b) => a - b);

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (i > 0 && arr[i] == arr[i - 1]) {
      continue;
    }

    let target = -arr[i];
    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      let sum = arr[left] + arr[right];

      if (sum == target) {
        result.push([-target, arr[left], arr[right]]);
        left++;
        right--;

        while (left < right && arr[left] === arr[left - 1]) {
          left++;
        }

        while (left < right && arr[right] === arr[right + 1]) {
          right--;
        }
      } else if (sum > target) {
        right--;
      } else {
        left++;
      }
    }
  }

  return result;
}

module.exports = {
  tripletSumToZero,
};
