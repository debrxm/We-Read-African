import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectPodcastEpisodes,
  selectNowPlaying,
} from '../../redux/podcast/podcast.selector';
import Episodes from '../../components/episodes/episodes';
import EpisodePage from '../episodepage/episodepage';
import SideBar from '../../components/SideBar/SideBar';
import './podcastpage.scss';
class PodcastPage extends Component {
  render() {
    const { match } = this.props;
    return (
      <div className="podcastpage">
        <div className="left-right">
          <div className="left">
            <Route exact path={`${match.path}`} component={Episodes} />
            <Route exact path={`/podcast/:episodeId`} component={EpisodePage} />
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
  playing: selectNowPlaying,
});
export default connect(mapStateToProps)(PodcastPage);
