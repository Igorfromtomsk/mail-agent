import LetterList from '../../components/letters-list';
import {connect} from 'react-redux';
import {selectLetter, favoriteLetter, deleteLetter} from '../../action/lettersActions';

const mapStateToProps = state => ({
  letters: state.letter
});
const mapDispatcherToProps = dispatch => ({
  selectLetterHandler: letter => dispatch(selectLetter(letter)),
  favoriteLetterHandler: letter => dispatch(favoriteLetter(letter)),
  deleteLetterHandler: letter => dispatch(deleteLetter(letter))
});

export default connect(mapStateToProps, mapDispatcherToProps)(LetterList);
