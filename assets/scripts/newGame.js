'use strict'

const placePiece = require('./placePiece')

const newGame = $('#newGame').on('click', function (event) {
  event.preventDefault()
  alert('new game')
  // basically undo placePiece
  placePiece.movesLeft = 9
  alert(placePiece.movesLeft)
})

module.exports = {
  placePiece,
  newGame
}
