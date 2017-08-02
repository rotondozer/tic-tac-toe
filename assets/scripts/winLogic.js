'use strict'

const updateWins = require('./updateWins')
const newGame = require('./newGame')

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
          return true
        }
      }
    }
  }
}

const checkWin = function (toadParam, callback) {
  toadParam.placements.sort()
  for (let i = 0; i < toadParam.placements.length; i++) {
    for (let j = 0; j < winConditions.length; j++) {
      if (toadParam.placements[i] === winConditions[j][0]) {
        if (callback(toadParam.placements, winConditions[j])) {
          // replace this alert with game reset function
          // alert(toadParam.name + ' WINS!')
          updateWins(toadParam)
          $('.game-board-square').addClass('unavailable')
        }
      }
    }
  }
}

module.exports = {
  checkWin,
  winConditions,
  compareArrays
}
