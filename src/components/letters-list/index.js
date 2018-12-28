import React, {Component} from "react";
import './style.sass';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import LetterCheckbox from '../commonInUse/letter-checkbox';
import IconButton from '../commonInUse/icon-button';
import Letter from "./letter";
import DetailsButtons from "./detailsButtons";

class SelectAllLetterCheckbox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: false
    };

    this.selectAllLetters = this.selectAllLetters.bind(this);
  }

  selectAllLetters() {
    this.setState({
      selected: !this.state.selected
    });
    this.props.selectLetterHandler(this.state);
  }

  render() {
    return (
      <LetterCheckbox
        letter={this.state}
        select={this.selectAllLetters}
      />
    )
  }
}

export default class LetterList extends Component {
  constructor(props) {
    super(props);

    this.state = {showed: false, coords: {x: null, y: null}};

    this.showDetailsButtons = this.showDetailsButtons.bind(this);
    this.hideDetailsButtons = this.hideDetailsButtons.bind(this);

    this.answerOnLetter = this.answerOnLetter.bind(this);
    this.deleteLetter = this.deleteLetter.bind(this);
  }

  getList() {
    return this.props.letters.map(letter => (
      <Letter
        key={letter.id}
        className="letter-list__letter"
        letter={letter}
        favoriteLetterHandler={this.props.favoriteLetterHandler}
        selectLetterHandler={this.props.selectLetterHandler}

        onMouseOver={this.showDetailsButtons}
        onMouseOut={this.hideDetailsButtons}
      />
    ));
  }

  showDetailsButtons(e, letter) {
    const rect = e.target.closest('.letter').getBoundingClientRect();

    this.setState({
      showed: true,
      letter: letter,
      coords: {
        x: (rect.x + rect.width) || 0,
        y: rect.y || 0,
      }
    })
  }

  hideDetailsButtons(e) {
    const event = Object.assign({}, e);
    if (!(event.relatedTarget && event.relatedTarget.closest('.details-buttons'))) {
      this.setState({showed: false})
    }
  }

  deleteLetter(letter) {
    this.props.deleteLetterHandler(letter);
  }

  answerOnLetter(letter) {
    this.props.addNewLetterToModalsList(letter);
  }

  render() {
    return (
      <div className="letter-list">
        <div className="letter-list__header">
          <div className="letter-list__header-td">
            <SelectAllLetterCheckbox
              selectLetterHandler={this.props.selectLetterHandler}
            />
          </div>
          <div className="letter-list__header-td">
            <IconButton><FontAwesomeIcon icon="sync-alt"/></IconButton>
          </div>
          <div className="letter-list__header-td">
            <IconButton><FontAwesomeIcon icon="ellipsis-v"/></IconButton>
          </div>
        </div>
        <table className="letter-list__letter-table">
          <tbody>
          {this.getList()}
          </tbody>
        </table>
        <DetailsButtons
          hideDetailsButtons={this.hideDetailsButtons}
          deleteLetter={this.deleteLetter}
          answerOnLetter={this.answerOnLetter}
          details={this.state}
        />
      </div>
    )
  }
}
