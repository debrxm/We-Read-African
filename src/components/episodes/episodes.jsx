import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectPodcastEpisodes,
  selectNowPlaying,
} from '../../redux/podcast/podcast.selector';
import EpisodePreview from '../../components/episode-preview/episode-preview';
import './episodes.scss';
const Episodes = (props) => {
  return (
    <div className="episodes">
      {props.episodes.map((episode, index) => {
        return <EpisodePreview key={index} episode_data={episode} />;
      })}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  episodes: selectPodcastEpisodes,
  playing: selectNowPlaying,
});
export default connect(mapStateToProps)(Episodes);
