import * as letterActions from "../actionTypes/lettersActionType";

const initialState = [
  {
    id: 1,
    author: 'Mary',
    title: "Someone wanna be your pen pal",
    text: "Hi, I would like to be with you!",
    time: "12/26/2018 15:01",
    selected: false
  },
  {
    id: 2,
    author: 'Harry',
    title: "I'll cast a spell on you!",
    text: "*shuh* Magic, bitch!",
    time: "02/26/2018 14:01",
    selected: false
  },
  {
    id: 3,
    author: 'Gulnaz',
    title: "Homework!",
    text: "Hi, here is your homework",
    time: "12/27/2018 16:08",
    selected: false
  }
]; //todo up it to default state off app or to server side actually

export function letterReduces(state = initialState, {payload, type}) {
  const newState = state.slice();

  switch (type) {
    case letterActions.LETTER_DELETE:
      console.log(payload);
      return newState.filter(letter => letter !== payload);
    case letterActions.LETTER_DELETE_ERROR:
      break;
    case letterActions.LETTER_DELETE_SUCCESS:
      break;

    case letterActions.LETTER_SELECT:
      if (payload.id) {
        const letterState = newState.filter(letter => letter === payload)[0];
        letterState.selected = !letterState.selected;
      } else {
        return newState.map(letter => {
          letter.selected = !payload.selected;

          return letter;
        })
      }
      break;
    case letterActions.LETTER_SELECT_ERROR:
      break;
    case letterActions.LETTER_SELECT_SUCCESS:
      break;

    case letterActions.LETTER_FAVORITE:
      const letterState = newState.filter(letter => letter === payload)[0];
      letterState.favorite = !letterState.favorite;
      break;
    case letterActions.LETTER_FAVORITE_ERROR:
      break;
    case letterActions.LETTER_FAVORITE_SUCCESS:
      break;

    default:
      break;
  }

  return newState;
}