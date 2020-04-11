import React from 'react';
import Play from '../../utils/play';
import Pause from '../../utils/pause';
import Bar from '../../utils/bar';
import useAudioPlayer from '../../utils/use-audio-player';
import './audio.scss';

const Audio = ({ episode_mp, episode_title, noTitle }) => {
  const {
    curTime,
    duration,
    playing,
    setPlaying,
    setClickedTime,
  } = useAudioPlayer();

  return (
    <div className="player">
      <div className={noTitle ? 'play_pause__button' : 'play__pause'}>
        {playing ? (
          <Pause handleClick={() => setPlaying(false)} noTitle={noTitle} />
        ) : (
          <Play handleClick={() => setPlaying(true)} noTitle={noTitle} />
        )}
        {noTitle ? null : (
          <h5 className="podcast__title">Now Playing: {episode_title}</h5>
        )}
      </div>
      <div className="player__wrapper">
        <audio id="audio">
          <source src={episode_mp} />
        </audio>
        <div className="controls">
          <Bar
            curTime={curTime}
            duration={duration}
            onTimeUpdate={(time) => setClickedTime(time)}
          />
        </div>
      </div>
    </div>
  );
};

export default Audio;
