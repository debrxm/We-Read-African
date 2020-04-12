import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import EpisodePreview from '../../components/episode-preview/episode-preview';
import { selectPodcastEpisodes } from '../../redux/podcast/podcast.selector';
import SideBar from '../../components/SideBar/SideBar';
import './podcastpage.scss';
class PodcastPage extends Component {
  state = {
    isLoading: true,
  };

  render() {
    return (
      <div className="podcastpage">
        <div className="left-right">
          <div className="left">
            {this.props.episodes.map((episode) => {
              return (
                <EpisodePreview
                  key={episode.posted_at}
                  episode_data={episode}
                />
              );
            })}
          </div>
          <div className="right">
            <SideBar />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  episodes: selectPodcastEpisodes,
});
export default connect(mapStateToProps)(PodcastPage);
