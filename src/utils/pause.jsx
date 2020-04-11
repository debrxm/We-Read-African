import React from 'react';
import pause from '../assets/pauseBttn.svg';
export default function Play(props) {
  const { handleClick, noTitle } = props;

  return (
    <button
      className={noTitle ? 'play__button' : 'player__button'}
      onClick={() => handleClick()}
    >
      <img src={pause} alt="pause icon" />
    </button>
  );
}
