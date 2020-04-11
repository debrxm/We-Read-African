import PodcastActionTypes from './podcast.types';

export const updatePodcastEpisodes = (forums) => ({
  type: PodcastActionTypes.UPDATE_PODCAST_EPISODES,
  payload: forums,
});
