'use strict'

const sum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; ++j) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
  return false
}

console.log(sum([1, 2, 3], 6))
