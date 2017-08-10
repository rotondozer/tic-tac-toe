'use strict'
const toads = require('./toads.js')
const changeToads = require('./changeToads')
const winLogic = require('./winLogic')
// const events = require('./auth/events.js')
// const api = require('./auth/api.js')

let movesLeft = 9

const gameValues = {
  i: 0,
  v: 0,
  isOver: false
}

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
        gameValues.indexValue = $(this).index()
        gameValues.playerValue = toads[i].value
        // check win on active player
        if (movesLeft < 5) {
          if (winLogic.checkWin(toads[i], winLogic.compareArrays)) {
            gameValues.isOver = true
            return
          } else if (movesLeft === 0) {
            gameValues.isOver = true
            $('#draw').modal('show')
          }
        }
        // API STUFF
        // events.onMakeMove($(this).index(), toads[i].value, gameValues.isOver)
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
  gameValues.isOver = false
  $('.game-board-square').removeClass('unavailable').html('')
  toads[0].placements = []
  toads[0].active = false
  toads[1].placements = []
  toads[1].active = true
}

module.exports = {
  placePiece,
  newGame,
  gameValues
}
