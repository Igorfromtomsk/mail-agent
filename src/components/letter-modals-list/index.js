import React from 'react';
import './style.sass';

import LetterModal from './letter-modal';

export default function letterModalsList({modals = [], closeModal, sendLetterHandler}) {
  return (
    <div className="letter-modal-list">
      {modals.map(letter => (
        <LetterModal
          key={letter.id || 'pseudo_'+letter.pseudo_id}
          modal={letter}
          closeModal={closeModal}
          sendLetter={sendLetterHandler}
        />
      ))}
    </div>
  )
}