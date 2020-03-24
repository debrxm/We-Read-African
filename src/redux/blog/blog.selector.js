import { createSelector } from 'reselect';

const selectBlog = state => state.blog;

export const selectAllBlog = createSelector([selectBlog], blog => blog.blogs);
