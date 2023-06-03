import React from 'react';
import './Card.css';

function Card({ musicPlayerList, id, title, src, setCurrentSong, setIsPlaying }) {
  const changeOnClick = () => {
    musicPlayerList.traverseTo(id);
    setCurrentSong(musicPlayerList.head.element);
    setIsPlaying(false);
  }

  return (
    <div className="Card" onClick={changeOnClick}>
      <img src={src} alt="title" className="cardimg" />
      <div className="cardDesc">
        <p className="cardTitle">{title}</p>
      </div>
    </div>
  )
}


export default Card;