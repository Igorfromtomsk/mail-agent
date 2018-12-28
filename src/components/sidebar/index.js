import React from "react";
import './style.sass';

export default function Sidebar({addNewLetterToModalsList}) {
  return (
    <div className="sidebar">
      <button
        onClick={addNewLetterToModalsList}
        className="sidebar__write-btn"
      >Write</button>
      <div className="menu-list">
        <button className="sidebar__button">Inbox</button>
        <button className="sidebar__button">Favorite</button>
        <button className="sidebar__button">Sent</button>
        <button className="sidebar__button">Drafts</button>
      </div>
    </div>
  )
}