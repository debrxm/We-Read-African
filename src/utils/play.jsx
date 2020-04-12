import React from 'react';
import play from '../assets/playIconWRA.svg';

export default function Play(props) {
  const { handleClick, noTitle } = props;

  return (
    <button
      className={noTitle ? 'play__button' : 'player__button'}
      onClick={() => handleClick()}
    >
      <img src={play} alt="play icon" />
    </button>
  );
}
