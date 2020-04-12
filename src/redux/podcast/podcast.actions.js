import PodcastActionTypes from './podcast.types';

export const updatePodcastEpisodes = (forums) => ({
  type: PodcastActionTypes.UPDATE_PODCAST_EPISODES,
  payload: forums,
});
export const setNowPlaying = (playing) => ({
  type: PodcastActionTypes.SET_NOW_PLAYING,
  payload: playing,
});
export const updatePercentage = (percent) => ({
  type: PodcastActionTypes.UPDATE_PERCENTAGE,
  payload: percent,
});
