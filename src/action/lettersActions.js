import * as letterActions from '../actionTypes/lettersActionType';

function deleteLetter(letter) {
  return {
    type: letterActions.LETTER_DELETE,
    payload: letter
  }
}
function deleteLetterError(error) {
  return {
    type: letterActions.LETTER_DELETE_ERROR,
    payload: error
  }
}
function deleteLetterSuccess(letter) {
  return {
    type: letterActions.LETTER_DELETE_SUCCESS,
    payload: letter
  }
}

function selectLetter(letter) {
  return {
    type: letterActions.LETTER_SELECT,
    payload: letter
  }
}
function selectLetterError(error) {
  return {
    type: letterActions.LETTER_SELECT_ERROR,
    payload: error
  }
}
function selectLetterSuccess(letter) {
  return {
    type: letterActions.LETTER_SELECT_SUCCESS,
    payload: letter
  }
}

function favoriteLetter(letter) {
  return {
    type: letterActions.LETTER_FAVORITE,
    payload: letter
  }
}
function favoriteLetterError(error) {
  return {
    type: letterActions.LETTER_FAVORITE_ERROR,
    payload: error
  }
}
function favoriteLetterSuccess(letter) {
  return {
    type: letterActions.LETTER_FAVORITE_SUCCESS,
    payload: letter
  }
}

function sendLetter(letter) {
  return {
    type: letterActions.LETTER_SEND,
    payload: letter
  }
}
function sendLetterError(error) {
  return {
    type: letterActions.LETTER_SEND_ERROR,
    payload: error
  }
}
function sendLetterSuccess(letter) {
  return {
    type: letterActions.LETTER_SEND_SUCCESS,
    payload: letter
  }
}

export {
  deleteLetter,
  deleteLetterError,
  deleteLetterSuccess,

  selectLetter,
  selectLetterError,
  selectLetterSuccess,

  favoriteLetter,
  favoriteLetterError,
  favoriteLetterSuccess,

  sendLetter,
  sendLetterError,
  sendLetterSuccess
}