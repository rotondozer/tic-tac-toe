'use strict'

const toads = [
  {
    name: 'hypnotoad',
    active: false,
    src: 'hypnotoad.jpg',
    moves: 5
  },
  {
    name: 'neematoad',
    active: true,
    src: 'neematoad.jpg',
    moves: 4
  }
]
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
  }
})
// $('.' + toads[i].name + '-moves-left:nth-child(2)').innerHTML('SELECTED')
module.exports = {
  toads,
  placePiece
}
