import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { firestore } from '../../firebase/firebase.utils';
import EpisodePreview from '../../components/episode-preview/episode-preview';
import { updatePodcastEpisodes } from '../../redux/podcast/podcast.actions';
import { selectPodcastEpisodes } from '../../redux/podcast/podcast.selector';
import './podcastpage.scss';
class PodcastPage extends Component {
  state = {
    isLoading: true,
  };
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
      <div className="podcastpage">
        <div className="left">
          {this.props.episodes.map((episode) => {
            return (
              <EpisodePreview key={episode.posted_at} episode_data={episode} />
            );
          })}
        </div>
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
export default connect(mapStateToProps, mapDespatchToProps)(PodcastPage);
