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
  for (let i = 0; i < array.length; i++) {
    if (array[i] === array2d[1]) {
      for (let j = 0; j < array.length; j++) {
        if (array[j] === array2d[2]) {
          alert('WINNER')
          return true
        }
      }
    }
  }
}

const checkWin = function (toadParam, callback) {
  toadParam.sort()
  for (let i = 0; i < toadParam.length; i++) {
    for (let j = 0; j < winConditions.length; j++) {
      if (toadParam[i] === winConditions[j][0]) {
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
