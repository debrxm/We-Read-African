import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
import { updatePercentage } from '../redux/podcast/podcast.actions';
import { selectPlayedTime } from '../redux/podcast/podcast.selector';
import PropTypes from 'prop-types';
import play from '../assets/playIconWRA.svg';
import pause from '../assets/pauseBttn.svg';
import muteIcon from '../assets/mute.svg';
import unMute from '../assets/unmute.svg';
import leftIcon from '../assets/left.svg';
import rightIcon from '../assets/right.svg';
import './audio-player.scss';
class AudioPlayer extends PureComponent {
  static propTypes = {
    songs: PropTypes.array.isRequired,
    autoplay: PropTypes.bool,
    onTimeUpdate: PropTypes.func,
    onEnded: PropTypes.func,
    onError: PropTypes.func,
    onPlay: PropTypes.func,
    onPause: PropTypes.func,
    onPrevious: PropTypes.func,
    onNext: PropTypes.func,
  };

  static defaultProps = {
    onTimeUpdate: () => {},
    onEnded: () => {},
    onError: () => {},
    onPlay: () => {},
    onPause: () => {},
    onPrevious: () => {},
    onNext: () => {},
  };

  constructor(props) {
    super(props);

    this.state = {
      active: props.songs[0],
      songs: props.songs,
      current: 0,
      progress: 0,
      random: false,
      playing: !!props.autoplay,
      repeat: false,
      mute: false,
      nextEpi: '',
      prevEpi: '',
    };

    this.audio = document.createElement('audio');
    this.audio.src = this.state.active.audio_file;
    this.audio.autoplay = !!this.state.autoplay;

    this.audio.addEventListener('timeupdate', (e) => {
      this.updateProgress();

      props.onTimeUpdate(e);
    });
    this.audio.addEventListener('ended', (e) => {
      if (this.state.songs.length > 1 || this.state.repeat) {
        this.next();
      } else {
        this.setState({ playing: false, progress: 0 });
      }

      props.onEnded(e);
    });
    this.audio.addEventListener('error', (e) => {
      this.next();

      props.onError(e);
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      active: nextProps.songs[0],
      songs: nextProps.songs,
      current: 0,
      progress: 0,
      random: false,
      playing: !!nextProps.autoplay,
      repeat: false,
      mute: false,
    });
  }

  shuffle = (arr) => arr.sort(() => Math.random() - 0.5);
  componentDidMount() {
    const { current, songs } = this.state;
    const total = songs.length;
    const nextEpisodeToPlay = current < total - 1 ? current + 1 : 0;
    const prevEpisodeToPlay = current > 0 ? current - 1 : total - 1;

    this.setState({
      nextEpi: this.props.songs[nextEpisodeToPlay].title,
      prevEpi: this.props.songs[prevEpisodeToPlay].title,
    });
  }
  updateProgress = () => {
    const { duration, currentTime } = this.audio;
    const progress = (currentTime * 100) / duration;
    const { current, songs } = this.state;
    const total = songs.length;
    const nextEpisodeToPlay = current < total - 1 ? current + 1 : 0;
    const prevEpisodeToPlay = current > 0 ? current - 1 : total - 1;

    this.setState({
      progress: progress,
      nextEpi: this.props.songs[nextEpisodeToPlay].title,
      prevEpi: this.props.songs[prevEpisodeToPlay].title,
    });
  };

  setProgress = (e) => {
    const target =
      e.target.nodeName === 'SPAN' ? e.target.parentNode : e.target;
    const width = target.clientWidth;
    const rect = target.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const duration = this.audio.duration;
    const currentTime = (duration * offsetX) / width;
    const progress = (currentTime * 100) / duration;

    this.audio.currentTime = currentTime;

    this.setState({
      progress: progress,
    });

    this.play();
  };

  play = () => {
    this.setState({
      playing: true,
    });

    this.audio.play();

    this.props.onPlay();
  };

  pause = () => {
    this.setState({
      playing: false,
    });

    this.audio.pause();

    this.props.onPause();
  };

  toggle = () => (this.state.playing ? this.pause() : this.play());

  next = () => {
    const { repeat, current, songs } = this.state;
    const total = songs.length;
    const nextEpisodeToPlay = repeat
      ? current
      : current < total - 1
      ? current + 1
      : 0;
    const active = songs[nextEpisodeToPlay];

    this.setState({
      current: nextEpisodeToPlay,
      active: active,
      progress: 0,
      repeat: false,
    });

    this.audio.src = active.audio_file;
    this.play();
    this.props.onNext();
  };

  previous = () => {
    const { current, songs } = this.state;
    const total = songs.length;
    const prevEpisodeToPlay = current > 0 ? current - 1 : total - 1;
    const active = songs[prevEpisodeToPlay];

    this.setState({
      current: prevEpisodeToPlay,
      active: active,
      progress: 0,
    });

    this.audio.src = active.audio_file;
    this.play();
    this.props.onPrevious();
  };

  randomize = () => {
    const { random, songs } = this.state;
    const shuffled = this.shuffle(songs.slice());

    this.setState({
      songs: !random ? shuffled : songs,
      random: !random,
    });
  };

  repeat = () =>
    this.setState({
      repeat: !this.state.repeat,
    });

  toggleMute = () => {
    const { mute } = this.state;

    this.setState({
      mute: !mute,
    });

    this.audio.volume = !!mute;
  };

  render() {
    const {
      active: currentSong,
      progress,
      prevEpi,
      nextEpi,
      playing,
      mute,
    } = this.state;
    const { duration, currentTime } = this.audio;
    function formatDuration(duration) {
      return moment
        .duration(duration, 'seconds')
        .format('mm:ss', { trim: false });
    }
    return (
      <div
        className="player-container"
        style={
          this.props.sidebar
            ? { margin: '0px', padding: '10px', background: 'transparent' }
            : {}
        }
      >
        <div
          className="artist-info"
          style={
            this.props.sidebar
              ? {
                  padding: '15px 5px',
                }
              : {}
          }
        >
          {/* <h2 className="artist-name">{currentSong.artist.name}</h2> */}
          <h3
            className="artist-song-name"
            style={this.props.sidebar ? { fontSize: '15px' } : {}}
          >
            {currentSong.title}
          </h3>
          <div className="player-buttons">
            <button
              className="player-btn small volume"
              onClick={this.toggleMute}
              title={mute ? 'Mute' : 'Unmute'}
            >
              <img
                src={mute ? muteIcon : unMute}
                alt={mute ? ' mute' : 'unmute'}
                style={
                  this.props.sidebar ? { width: '15px', marginTop: '10px' } : {}
                }
              />
            </button>
          </div>
        </div>

        <div
          className="player-progress-container"
          onClick={(e) => this.setProgress(e)}
        >
          <span
            className="player-progress-value"
            style={{ width: progress + '%' }}
          ></span>
        </div>
        <div className="player-progress-timer">
          <span
            className="player-progress-time"
            style={this.props.sidebar ? { fontSize: '13px' } : {}}
          >
            {formatDuration(currentTime)}
          </span>
          <span
            className="player-progress-time"
            style={this.props.sidebar ? { fontSize: '13px' } : {}}
          >
            {formatDuration(duration)}
          </span>
        </div>

        <div className="player-options">
          <div
            className="player-buttons player-controls"
            style={this.props.sidebar ? { width: '100%' } : {}}
          >
            <button
              onClick={this.previous}
              className="player-btn medium"
              title="Previous Episode"
            >
              <img
                src={leftIcon}
                alt="left icon"
                style={this.props.sidebar ? { width: '15px' } : {}}
              />
              {this.props.sidebar ? null : <span>{prevEpi}</span>}
            </button>
            <button
              onClick={this.toggle}
              className="player-btn big"
              title={playing ? ' Pause' : 'Play'}
            >
              <img
                src={playing ? pause : play}
                alt={playing ? ' pause' : 'play'}
                style={this.props.sidebar ? { width: '20px' } : {}}
              />
            </button>
            <button
              onClick={this.next}
              className="player-btn medium"
              title="Next Episode"
            >
              {this.props.sidebar ? null : <span>{nextEpi}</span>}
              <img
                src={rightIcon}
                alt="right icon"
                style={this.props.sidebar ? { width: '15px' } : {}}
              />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  updatePercentage: (percent) => dispatch(updatePercentage(percent)),
});
const mapStateToProps = createStructuredSelector({
  playedTime: selectPlayedTime,
});
export default connect(mapStateToProps, mapDispatchToProps)(AudioPlayer);
