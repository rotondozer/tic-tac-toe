'use strict'

require('./toads')
require('./placePiece')

const updateWins = function (toadWinner) {
  toadWinner.gamesWon += 1
  $('#' + toadWinner.name + '-wins').text(toadWinner.gamesWon)
}

module.exports = updateWins
