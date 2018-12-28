import {letterReduces} from './letters-list';

import {combineReducers} from "redux";

export default combineReducers({
  letter: letterReduces
});