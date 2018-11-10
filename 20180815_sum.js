'use strict'

const sum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; ++j) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
  return '未找到'
}

console.log(sum([1, 2, 3], 6))
