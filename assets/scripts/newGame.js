'use strict'

const placePiece = require('./placePiece')

const newGame = $('#newGame').on('click', function (event) {
  event.preventDefault()
  // basically undo placePiece
  placePiece.movesLeft = 9
  alert(placePiece.movesLeft)
})

module.exports = {
  newGame
}
