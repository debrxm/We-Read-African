import { createSelector } from 'reselect';

const selectPodcast = (state) => state.podcast;
export const selectPodcastEpisodes = createSelector(
  [selectPodcast],
  (podcast) => podcast.episodes
);
export const selectNowPlaying = createSelector(
  [selectPodcast],
  (podcast) => podcast.playing
);
export const selectPlayedTime = createSelector(
  [selectPodcast],
  (podcast) => podcast.playedTime
);
