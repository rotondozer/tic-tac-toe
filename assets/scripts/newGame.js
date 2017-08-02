'use strict'

const placePiece = require('./placePiece')
const toads = require('./toads')

const newGame = function () {
  placePiece.movesLeft = 9
  $('.game-board-square').removeClass('unavailable').html('')
  toads[0].placements = []
  toads[0].active = false
  toads[1].placements = []
  toads[1].active = true
}

$('#newGame').on('click', function (event) {
  event.preventDefault()
  newGame()
})

module.exports = {
  newGame
}
