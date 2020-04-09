import PodcastActionTypes from './podcast.types';
const INITIAL_STATE = {
  episodes: [],
};

const PodcastReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PodcastActionTypes.UPDATE_PODCAST_EPISODES:
      return {
        ...state,
        episodes: action.payload,
      };

    default:
      return state;
  }
};

export default PodcastReducer;
