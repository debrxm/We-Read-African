import PodcastActionTypes from './podcast.types';
const INITIAL_STATE = {
  episodes: [],
  playing: '',
  playedTime: 0,
};

const PodcastReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PodcastActionTypes.UPDATE_PODCAST_EPISODES:
      return {
        ...state,
        episodes: action.payload,
      };
    case PodcastActionTypes.SET_NOW_PLAYING:
      return {
        ...state,
        playing: action.payload,
      };
    case PodcastActionTypes.UPDATE_PERCENTAGE:
      return {
        ...state,
        playedTime: action.payload,
      };
    default:
      return state;
  }
};

export default PodcastReducer;
