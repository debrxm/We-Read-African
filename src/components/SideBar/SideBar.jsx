import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { firestore } from '../../firebase/firebase.utils';
import { updatePodcastEpisodes } from '../../redux/podcast/podcast.actions';
import { selectPodcastEpisodes } from '../../redux/podcast/podcast.selector';
//Components
import Search from '../Search/Search';
import Audio from '../../components/audio/audio';
import logo from '../../assets/logo.svg';
import CustomForm from '../newsletter/custom-form';
import SidebarLatestPosts from '../sidebar-latest-posts/sidebar-latest-posts';
import CurrentRead from '../current-read/current-read';

class SideBar extends React.Component {
  componentDidMount() {
    const podcastRef = firestore
      .collection('podcast')
      .orderBy('posted_at', 'desc');
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
        <div className="now-playing">
          <div className="podcastPlayHeader">
            <img src={logo} alt="logo" />
          </div>
          <br />
          {this.props.episodes.map((episode, index) => {
            return (
              <Audio
                key={index}
                episode_mp={episode.audio_file}
                episode_title={episode.title}
              />
            );
          })}
        </div>
        <CustomForm sidebar />
        <SidebarLatestPosts />
        <CurrentRead />
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
});
export default connect(mapStateToProps, mapDespatchToProps)(SideBar);
