import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectPodcastEpisodes } from '../../redux/podcast/podcast.selector';
import {
  setNowPlaying,
  updatePercentage,
} from '../../redux/podcast/podcast.actions';
// import AudioPlayer from '../../utils/audio-player';
// import useAudioPlayer from '../../utils/use-audio-player';
import tomb from '../../assets/tomb.svg';
import itune_podcast from '../../assets/itune_podcast.svg';
import sound from '../../assets/sound.svg';
import rss from '../../assets/rss.svg';
import spotify from '../../assets/spotify.svg';
import download from '../../assets/download.svg';
import './episode-preview.scss';
class EpisodePreview extends Component {
  state = {
    isPlaying: false,
  };
  handlechangePlaying = () => {
    this.props.setNowPlaying(this.props.episode_data.title);
    this.props.updatePercentage(0);
    this.forceUpdate();
  };
  render() {
    const {
      title,
      sub_title,
      episode,
      updated_at,
      // itune,
      // soundcloud,
      // rss,
      // spotify
    } = this.props.episode_data;
    return (
      <div className="episode-preview">
        <div className="image-container" onClick={this.handlechangePlaying}>
          <img src={tomb} alt="podcast img" className="image" />
        </div>
        <div className="details-control">
          <span className="epi">Episode {episode}</span>
          <Link to={`/podcast/${title.split(' ').join('-').toLowerCase()}`}>
            <h3 className="title">{title}</h3>
          </Link>
          <p className="sub-title">{sub_title}</p>
          <span className="time">
            {' '}
            {new Date(updated_at.seconds * 1000)
              .toString()
              .split(' ')
              .slice(0, 4)
              .join(' ')}
          </span>
          <div className="control-links">
            <a href="https://www.itune.com" className="link">
              <img src={itune_podcast} alt="itune stream icon" />
            </a>
            <a href="https://www.itune.com" className="link">
              <img src={sound} alt="soundcloud stream icon" />
            </a>
            <a href="https://www.itune.com" className="link">
              <img src={rss} alt="rss stream icon" />
            </a>
            <a href="https://www.itune.com" className="link">
              <img src={spotify} alt="spotify stream icon" />
            </a>
            <a
              href={
                this.props.episode_data
                  ? this.props.episode_data.audio_file
                  : null
              }
              className="download"
              download
            >
              <img src={download} alt="download icon" />
              <span>Download</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  episodes: selectPodcastEpisodes,
});
const mapDispatchToProps = (dispatch) => ({
  setNowPlaying: (playing) => dispatch(setNowPlaying(playing)),
  updatePercentage: (percent) => dispatch(updatePercentage(percent)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EpisodePreview);
