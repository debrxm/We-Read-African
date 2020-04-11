import { createSelector } from 'reselect';

const selectForum = (state) => state.forum;
export const selectAllForumTopics = createSelector(
  [selectForum],
  (forum) => forum.forums
);
export const selectTopicComments = createSelector(
  [selectForum],
  (forum) => forum.comments
);
export const selectTopicViews = createSelector(
  [selectForum],
  (forum) => forum.views
);
export const selectTrendingTopics = createSelector(
  [selectForum],
  (forum) => forum.trending
);
export const selectForumFilteredTopic = (forumUrlParam, url) =>
  createSelector([selectAllForumTopics], (forum) =>
    forum.filter((item, index) => item.tag.toLowerCase() === forumUrlParam)
  );

export const selectForumTopic = (forumUrlParam, url) =>
  createSelector([selectAllForumTopics], (forum) =>
    forum.filter(
      (item, index) =>
        item.title.toLowerCase() === forumUrlParam.split('-').join(' ')
    )
  );
