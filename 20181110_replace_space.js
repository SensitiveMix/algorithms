function replaceSpace (str) {
    // write code here
  let replaceString = ''
  for (let i in str) {
    if (str[i] === ' ') {
      replaceString += '%20'
    } else {
      replaceString += str[i]
    }
  }
  return replaceString
}

console.log(replaceSpace('We Are Happy'))
