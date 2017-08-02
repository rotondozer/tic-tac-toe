'use strict'
const toads = require('./toads.js')
const changeToads = require('./changeToads')
const winLogic = require('./winLogic')
const updateWins = require('./updateWins')

let movesLeft = 9
// callback function?
const placePiece = $('.game-board-square').on('click', function () {
  // ensure square is available for successful placement
  if (!($(this).hasClass('unavailable'))) {
    for (let i = 0; i < 2; i++) {
      // check active player
      if (toads[i].active) {
        // assign appropriate piece
        $(this).html('<img src="images/' + toads[i].src + '" alt="" class="game-piece">')
        // reduce moves left by one
        movesLeft -= 1
        // assign move coordinates
        toads[i].placements.push($(this).index())
        // first available win condition(?)
        if (movesLeft < 5) {
          winLogic.checkWin(toads[i].placements, winLogic.compareArrays)
          updateWins(toads[i])
        }
      }
    } // END for loop
    // make square unavailable
    $(this).addClass('unavailable')
    // change players
    changeToads()
  } // END if conditional
})

module.exports = {
  placePiece,
  movesLeft
}
