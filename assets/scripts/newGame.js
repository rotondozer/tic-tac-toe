'use strict'

const placePiece = require('./placePiece')
const toads = require('./toads')

const newGame = $('#newGame').on('click', function (event) {
  event.preventDefault()
  placePiece.movesLeft = 9
  $('.game-board-square').removeClass('unavailable').html('')
  toads[0].placements = []
  toads[0].active = false
  toads[1].placements = []
  toads[1].active = true
})

module.exports = {
  newGame
}
