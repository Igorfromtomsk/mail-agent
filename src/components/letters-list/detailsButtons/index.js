import React, {Component} from 'react';
import './style.sass';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import IconButton from '../../commonInUse/icon-button';

export default class DetailsButtons extends Component {
  constructor(props) {
    super(props);

    this.detailsModal = React.createRef();
  }

  deleteLetterHandler() {
    this.props.deleteLetter(this.props.details.letter);
    this.props.hideDetailsButtons();
  }

  answerOnLetterHandler() {
    this.props.answerOnLetter(this.props.details.letter);
  }

  componentDidMount() {
    this.modalWidth = this.detailsModal.current.clientWidth;
  }

  render() {
    return (
      <div
        onMouseLeave={e => this.props.hideDetailsButtons()}
        ref={this.detailsModal}
        style={{
          'left': (this.props.details.coords.x - this.modalWidth) + 'px',
          'top': this.props.details.coords.y + 'px'
        }}
        className={'details-buttons ' + (this.props.details.showed ? 'details-buttons--showed' : '')}
      >
        <IconButton
          onClick={() => this.deleteLetterHandler()}
        ><FontAwesomeIcon icon="trash-alt"/></IconButton>
      </div>
    )
  }
}