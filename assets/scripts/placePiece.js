'use strict'
const toads = require('./toads.js')
const changeToads = require('./changeToads')
// callback function?
const placePiece = $('.game-board-square').on('click', function () {
  // ensure square is available
  if (!($(this).hasClass('unavailable'))) {
    for (let i = 0; i < toads.length; i++) {
      // check active player
      if (toads[i].active) {
        // assign appropriate piece
        $(this).html('<img src="images/' + toads[i].src + '" alt="" class="game-piece">')
        // reduce moves left by one
        toads[i].moves -= 1
      }
    }
    // make square unavailable
    $(this).addClass('unavailable')
    changeToads()
  }
})

module.exports = placePiece
