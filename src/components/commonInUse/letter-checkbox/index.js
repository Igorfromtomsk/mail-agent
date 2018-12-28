import React from 'react';
import './style.sass';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default function LetterCheckbox({select, letter = {}}) {
  return (
    <div
      onClick={e => select(letter)}
      className={'letter-checkbox' + (letter.selected ? ' letter-checkbox--selected ' : '')}
    >
      <span className="letter-checkbox__checkbox-frame">
        <FontAwesomeIcon icon="check"/>
      </span>
    </div>
  )
}