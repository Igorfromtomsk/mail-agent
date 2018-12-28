import React from 'react';
import './style.sass';

import LetterModal from './letter-modal';

export default function letterModalsList({modals = [], closeModal}) {
  return (
    <div className="letter-modal-list">
      {modals.map(letter => (
        <LetterModal
          key={letter.id}
          modal={letter}
          closeModal={closeModal}
        />
      ))}
    </div>
  )
}