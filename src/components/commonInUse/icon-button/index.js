import React from 'react';
import './style.sass';

export default function IconButton({onClick, children, className}) {
  return (
    <button
      onClick={onClick}
      className={'default-mail-btn ' + className}
    >{children}</button>
  )
}