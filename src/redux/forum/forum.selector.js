import { createSelector } from 'reselect';

const selectForum = state => state.forum;
export const selectAllForumTopics = createSelector(
  [selectForum],
  forum => forum.forums
);
export const selectForumFilteredTopic = (forumUrlParam, url) =>
  createSelector([selectAllForumTopics], forum =>
    forum.filter((item, index) => item.tag.toLowerCase() === forumUrlParam)
  );

export const selectForumTopic = (forumUrlParam, url) =>
  createSelector([selectAllForumTopics], forum =>
    forum.filter(
      (item, index) =>
        item.topic_data.title.toLowerCase() ===
        forumUrlParam.split('-').join(' ')
    )
  );
