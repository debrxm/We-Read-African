import React from 'react';
import { connect } from 'react-redux';
import { setNowPlaying } from '../../redux/podcast/podcast.actions';
import Play from '../../utils/play';
import Pause from '../../utils/pause';
import Bar from '../../utils/bar';
import useAudioPlayer from '../../utils/use-audio-player';
import './audio.scss';

const Audio = ({
  episode_mp,
  episode_title,
  setNowPlaying,
  noTitle,
  sidebarplaying,
}) => {
  const {
    curTime,
    duration,
    playing,
    setPlaying,
    setClickedTime,
  } = useAudioPlayer();

  const handleplay = () => {
    setPlaying(true);
    setNowPlaying(episode_title);
  };
  const handlepause = () => {
    setPlaying(false);
  };
  return (
    <div className="player">
      <div className={noTitle ? 'play_pause__button' : 'play__pause'}>
        {playing ? (
          <Pause handleClick={handlepause} noTitle={noTitle} />
        ) : (
          <Play handleClick={handleplay} noTitle={noTitle} />
        )}
        <h5 className="podcast__title">
          {noTitle ? 'Now Playing:' : null} {episode_title}
        </h5>
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
            sidebarplaying={sidebarplaying}
            setPlaying={setPlaying}
          />
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setNowPlaying: (playing) => dispatch(setNowPlaying(playing)),
});
export default connect(null, mapDispatchToProps)(Audio);
