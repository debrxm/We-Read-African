import ForumActionTypes from './blog.types';

export const updateForums = forums => ({
  type: ForumActionTypes.UPDATE_FORUMS,
  payload: forums
});
