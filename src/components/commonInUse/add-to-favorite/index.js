import React from 'react';
import IconButton from '../icon-button';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './style.sass'

export default function AddToFavorite({favorite, letter, className}) {
  return (
    <IconButton
      className={className + ' add-to-favorite-btn ' + (letter.favorite ? 'add-to-favorite-btn--added' : '')}
      onClick={e => favorite(letter)}>
      <FontAwesomeIcon icon={["far", "star"]}/>
      <FontAwesomeIcon icon={["fas", "star"]} className="awesome-icon-shadow"/>
    </IconButton>
  )
}