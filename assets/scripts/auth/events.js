'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields.js')
const placePiece = require('../placePiece')
// const app = require('../app')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .done(ui.signUpSuccess)
    .fail(ui.fail)
}

const onSignIn = function (event) {
  event.preventDefault()
  $('.game-board').show()
  const data = getFormFields(event.target)
  api.signIn(data)
    .done(ui.signInSuccess)
    .fail(ui.fail)
}

const onSignOut = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signOut(data)
    .done(ui.signOutSuccess)
    .fail(ui.fail)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .done(ui.changePasswordSuccess)
    .fail(ui.fail)
}

const onCreateGame = function (event) {
  event.preventDefault()
  placePiece.newGame()
  alert('made it this far')
  // HOW TO GET THE DATA
  api.createGame()
    .then(ui.gamePostSuccess)
    .catch(ui.fail)
}

const onMakeMove = function (event) {
  event.preventDefault()
  alert('Place Piece')
  const data = placePiece.gameValues
  api.makeMove(data.i, data.v, data.isOver)
    .then(ui.makeMoveSuccess)
    .catch(ui.fail)
}

const onGetGames = function (event) {
  event.preventDefault()
  console.log('here')
  api.retrieveGames()
    .then(ui.getGameSuccess)
    .catch(ui.fail)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  $('#newGame').on('click', onCreateGame)
  $('.game-board-square').on('click', onMakeMove)
  $('#get-games').on('click', onGetGames)
}

module.exports = {
  addHandlers,
  onMakeMove
}
