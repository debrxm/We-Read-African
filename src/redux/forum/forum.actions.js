import ForumActionTypes from './forum.types';

export const updateForums = forums => ({
  type: ForumActionTypes.UPDATE_FORUMS,
  payload: forums
});

export const updateForumComments = comment => ({
  type: ForumActionTypes.UPDATE_FORUM_COMMENTS,
  payload: comment
});

export const updateForumViews = views => ({
  type: ForumActionTypes.UPDATE_FORUM_VIEWS,
  payload: views
});
export const updateTrendingTopics = trending => ({
  type: ForumActionTypes.UPDATE_TRENDING_TOPICS,
  payload: trending
});
