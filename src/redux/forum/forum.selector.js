import { createSelector } from 'reselect';

const selectForum = state => state.forum;
export const selectAllForumTopics = createSelector(
  [selectForum],
  forum => forum.forums
);
export const selectForumFilteredTopic = (forumUrlParam, url) =>
  createSelector([selectForum], forum =>
    forum.filter((item, index) => item.tag.toLowerCase() === forumUrlParam)
  );
