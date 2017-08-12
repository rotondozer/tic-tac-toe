'use strict'

const app = require('../app')
const getFormFields = require('../../../lib/get-form-fields.js')

// authApi.signUp(authUi.success, authUi.failure, data)

const signUp = function (data) {
  // console.log(data)
  return $.ajax({
    url: app.host + '/sign-up/',
    method: 'POST',
    data
  })
}

const signIn = function (data) {
  // console.log(data)
  return $.ajax({
    url: app.host + '/sign-in/',
    method: 'POST',
    data
  })
}

const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: app.host + '/sign-out/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const changePassword = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: app.host + '/change-password/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: data
  })
}

const createGame = function () {
  return $.ajax({
    // console.log(app.host.games)
    method: 'POST',
    url: app.host + '/games',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    success: function (response) {
      // console.log(response)
    }
  })
}

const retrieveGames = function () {
  return $.ajax({
    method: 'GET',
    url: app.host + '/games?over=true',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const makeMove = function (index, value, over) {
  return $.ajax({
    method: 'PATCH',
    url: app.host + '/games/' + app.game.id,
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    // These values retrieved from an updated object in placePiece.js
    data: {
      'game': {
        'cell': {
          'index': index,
          'value': value
        },
        'over': over
      }
    }
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  createGame,
  makeMove,
  getFormFields,
  retrieveGames
}
