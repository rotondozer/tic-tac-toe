'use strict'
// remove signIn and signOut
const app = require('../app.js')

// remove me before code-along
const signInSuccess = (data) => {
  app.user = data.user
  console.log(app)
  // console.log('sign in success!')
  $('#signedInUser').text(data.user.email)
  $('input').val('')
  $('#log-in-to-play').hide()
}

// remove me before code-along
const signOutSuccess = () => {
  app.user = null
  console.log(app)
  // console.log('signed out')
  $('#signedInUser').text('')
  $('.game-board').hide()
  $('#log-in-to-play').show()
  $('#myAcct').modal('hide')
}

const changePasswordSuccess = () => {
  $('input').val('')
  $('#myAcct').modal('hide')
  // console.log('Password Successfully Changed.')
}

// I made this
const signUpSuccess = (data) => {
  console.log(data)
  $('#signUp').modal('hide')
}

const success = (data) => {
  console.log(data)
}

const failure = (error) => {
  console.error(error)
}

const gamePostSuccess = () => {
  console.log('well, ya did something')
  console.log(app.game)
}

const makeMoveSuccess = () => {
  console.log('made a move')
}

module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
  gamePostSuccess,
  makeMoveSuccess,
  signUpSuccess
}
