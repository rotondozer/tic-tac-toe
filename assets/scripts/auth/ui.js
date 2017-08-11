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

const gamePostSuccess = (data) => {
  console.log('well, ya did something')
  app.game = data.game
  app.game.id = data.game.id
}

const makeMoveSuccess = () => {
  console.log('made a move')
}

const getGameSuccess = (data) => {
  console.log('getting games?')
  console.log(data.games)
  $('#myAcct').modal('hide')
  $('#view-games-modal').modal('show')
  // put this inside a for loop to loop through all games
  for (let i = 0; i < data.games.length; i++) {
    $('#games-content').append('<div>Game ID:' + data.games[i].id + '</div>')
    $('#games-content').append('<div>Game STATE:' + data.games[i].cells + '</div>')
  }
}

module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
  gamePostSuccess,
  makeMoveSuccess,
  signUpSuccess,
  getGameSuccess
}
