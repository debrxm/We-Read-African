import { createSelector } from 'reselect';

const selectForum = state => state.forum;

export const selectForumFilteredTopic = (forumUrlParam, url) =>
  createSelector([selectForum], forum =>
    forum.filter((item, index) => item.tag.toLowerCase() === forumUrlParam)
  );
