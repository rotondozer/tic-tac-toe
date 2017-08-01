'use strict'

const toads = require('./toads')

// trying to eliminate loop since array.length is only 2?
//  if not one, must be the other
const changeToads = function () {
  for (let i = 0; i < toads.length; i++) {
    toads[i].active = !toads[i].active
  }
}
console.log(toads)

module.exports = changeToads
