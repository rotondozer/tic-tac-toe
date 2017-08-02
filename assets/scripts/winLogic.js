'use strict'

const winConditions = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8]
]

const compareArrays = function (array, array2d) {
  console.log('i\'ve been called on ' + array + ' and ' + array2d)
  console.log(array2d[1])
  for (let i = 0; i < array.length; i++) {
    if (array[i] === array2d[1]) {
      console.log('made it')
      for (let j = 0; j < array.length; j++) {
        if (array[j] === array2d[2]) {
          console.log('WINNER!')
          alert('WINNER')
          return true
        }
      }
    }
  }
}

const checkWin = function (toadParam, callback) {
  // move sort() out after debugging?
  toadParam.sort()
  console.log(toadParam)
  for (let i = 0; i < toadParam.length; i++) {
    for (let j = 0; j < winConditions.length; j++) {
      if (toadParam[i] === winConditions[j][0]) {
        console.log(toadParam[i])
        console.log(winConditions[j])
        callback(toadParam, winConditions[j])
      }
    }
  }
}

module.exports = {
  checkWin,
  winConditions,
  compareArrays
}
