'use strict'

const winConditions = function (param) {
  return param % 1 === 0 || param % 2 === 0 || param % 3 === 0 || param % 4 === 0
}

const checkWin = function (toadArr, callback) {
  // *** FOR TESTING ***
  alert(toadArr)
  for (let i = 0; i < toadArr.length; i++) {
    // if all indexes % === 0
    if (callback(toadArr[i])) {
      alert('win detected')
      return true
    } else {
      return false
    }
  }
}

module.exports = {
  checkWin,
  winConditions
}

// Write a function that returns `true`
// if an only if invoking the callback
// for every element returns `true`
// for one and only one element
// you may use any feature of JavaScript
// to solve this problem
/*
const hasOne = function (array, callback) {
  const arrOfOne = []
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      arrOfOne.push(array[i])
    }
  }
  if (arrOfOne.length === 1) {
    return true
  } else {
    return false
  }
}
*/
