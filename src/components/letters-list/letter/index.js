import React from 'react';
import './style.sass';

import AddToFavorite from '../../commonInUse/add-to-favorite';
import LetterCheckbox from '../../commonInUse/letter-checkbox';
import LetterDate from "./letter-date";

export default function Letter ({letter, selectLetterHandler, favoriteLetterHandler, className, onMouseOver, onMouseOut}) {
  function mouseOverHandler(e) {
    onMouseOver(e, letter);
  }

  return (
    <tr
      key={letter.id}
      className={className + " letter"}
      onMouseOver={mouseOverHandler}
      onMouseOut={e => onMouseOut(e)}
    >
      <td className="letter__td-letter-checkbox">
        <LetterCheckbox
          select={selectLetterHandler}
          letter={letter}
        />
        </td>
      <td className="letter__td-favorite">
        <AddToFavorite
          favorite={favoriteLetterHandler}
          letter={letter}
        />
      </td>
      <td className="letter__td-author"><h3 className="letter__author">{letter.author}</h3></td>
      <td className="letter__td-letter">
        <h3 className="letter__title">{letter.title}</h3>
        <p className="letter__text">{letter.text}</p>
      </td>
      <td className="letter__td-date">
        <LetterDate date={letter.time}/>
      </td>
    </tr>
  )
};