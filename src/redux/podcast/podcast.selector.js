import { createSelector } from 'reselect';

const selectPodcast = (state) => state.podcast;
export const selectPodcastEpisodes = createSelector(
  [selectPodcast],
  (podcast) => podcast.episodes
);
