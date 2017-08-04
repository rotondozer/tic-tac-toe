'use strict'
const toads = require('./toads.js')
const changeToads = require('./changeToads')
const winLogic = require('./winLogic')

let movesLeft = 9
// callback function?
const placePiece = $('.game-board-square').on('click', function () {
  // ensure square is available for successful placement
  if (!($(this).hasClass('unavailable'))) {
    for (let i = 0; i < 2; i++) {
      // check active player
      if (toads[i].active) {
        // assign appropriate piece
        $(this).html('<img src="https://raw.githubusercontent.com/rotondozer/tic-tac-toe/master/images/' + toads[i].src + '" alt="toad" class="game-piece">')
        // reduce moves left by one
        movesLeft -= 1
        // assign move coordinates
        toads[i].placements.push($(this).index())
        // check win on active player
        if (movesLeft < 5) {
          if (winLogic.checkWin(toads[i], winLogic.compareArrays)) {
            return
          } else if (movesLeft === 0) {
            $('#draw').modal('show')
          }
        }
      }
    } // END for loop
    // make square unavailable
    $(this).addClass('unavailable')
    // change players
    changeToads()
  } // END if conditional
})

const newGame = function () {
  movesLeft = 9
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
  placePiece,
  newGame
}
