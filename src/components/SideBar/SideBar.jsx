import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { firestore } from '../../firebase/firebase.utils';
import { updatePodcastEpisodes } from '../../redux/podcast/podcast.actions';
import {
  selectPodcastEpisodes,
  selectNowPlaying,
} from '../../redux/podcast/podcast.selector';
//Components
import Search from '../Search/Search';
import Audio from '../../components/audio/audio';
import logo from '../../assets/logo.svg';
import CustomForm from '../newsletter/custom-form';
import SidebarLatestPosts from '../sidebar-latest-posts/sidebar-latest-posts';
import CurrentRead from '../current-read/current-read';
import ReadersFavorite from '../readers-favorite/readers-favorite';

class SideBar extends React.Component {
  componentDidMount() {
    const podcastRef = firestore.collection('pod').orderBy('episode', 'asc');
    podcastRef.onSnapshot(async (snapshot) => {
      const episodes = [];
      snapshot.docs.forEach((doc) => {
        episodes.push(doc.data());
      });

      this.props.updatePodcastEpisodes(episodes);
      // send to redux
    });
  }
  render() {
    return (
      <div className="sidebar">
        <Search />
        {this.props.history.location.pathname.includes('/podcast') ? null : (
          <div className="now-playing">
            <div className="podcastPlayHeader">
              <img src={logo} alt="logo" />
            </div>
            <br />
            {this.props.episodes
              .filter((item, index) => item.title === this.props.playing)
              .map((episode, index) => {
                if (episode) {
                  return (
                    <Audio
                      key={index}
                      episode_mp={episode.audio_file}
                      episode_title={episode.title}
                      sidebarplaying
                    />
                  );
                }
                return <span>Not Playing Anything ATM</span>;
              })}
          </div>
        )}
        <CustomForm sidebar />
        <SidebarLatestPosts />
        <CurrentRead />
        <ReadersFavorite />
      </div>
    );
  }
}

const mapDespatchToProps = (dispatch) => ({
  updatePodcastEpisodes: (episodes) =>
    dispatch(updatePodcastEpisodes(episodes)),
});
const mapStateToProps = createStructuredSelector({
  episodes: selectPodcastEpisodes,
  playing: selectNowPlaying,
});
export default withRouter(
  connect(mapStateToProps, mapDespatchToProps)(SideBar)
);
