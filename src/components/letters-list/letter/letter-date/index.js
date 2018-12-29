import React from 'react';
import './style.sass';

export default function LetterDate({date}) {
  const letterDate = new Date(date);
  const toDate = Intl.DateTimeFormat('ru', {});
  const now = new Date();

  let resultDate;

  switch (true) {
    case (now.getTime() - letterDate.getTime()) > 86400000:
      resultDate = toDate.format(letterDate);
      break;
    case (now.getTime() - letterDate.getTime()) < 86400000 && 3600000 < (now.getTime() - letterDate.getTime()):
      resultDate = Math.floor((now.getTime() - letterDate.getTime()) / 3600000).toString() + ' hours ego';
      break;
    case (now.getTime() - letterDate.getTime()) < 3600000 && 60000 < (now.getTime() - letterDate.getTime()):
      resultDate = Math.floor((now.getTime() - letterDate.getTime()) / 60000).toString() + ' minutes ego';
      break;
    case (now.getTime() - letterDate.getTime()) < 60000:
      resultDate = Math.floor((now.getTime() - letterDate.getTime()) / 1000).toString() + ' seconds ego';
      break;
    default:
      resultDate = toDate.format(date);
      break;
  }

  return (
    <p className="letter__time">{resultDate}</p>
  )
}