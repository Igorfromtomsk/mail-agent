import App from '../App';
import {connect} from 'react-redux';
import {sendLetter} from '../action/lettersActions';

const mapStateToProps = state => ({});

const mapDispatcherToProps = dispatch => ({
  sendLetterHandler: letter => dispatch(sendLetter(letter))
});

export default connect(mapStateToProps, mapDispatcherToProps)(App);
