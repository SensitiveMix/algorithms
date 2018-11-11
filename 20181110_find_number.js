function Find (target, array) {
    // write code here
  if (!array.length || !array[0].length) {
    return false
  }

  let maxtrix = array.length

  let row = 0
  let c = array[0].length - 1
  while (row <= maxtrix - 1 && c >= 0) {
    console.log(row, c, maxtrix)
    if (target === array[row][c]) {
      return true
    } else if (target > array[row][c]) {
      row++
    } else {
      c--
    }
  }

  return false
}

console.log(Find(7, [[1, 2, 8, 9], [4, 7, 10, 13]]))
