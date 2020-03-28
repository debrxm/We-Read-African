import { createSelector } from 'reselect';

const selectBlog = state => state.blog;

export const selectAllBlog = createSelector([selectBlog], blog => blog.blogs);

export const selectBlogPost = (blogUrlParam, url) =>
  createSelector([selectAllBlog], blog =>
    blog.filter(
      (item, index) =>
        item.title.toLowerCase() === blogUrlParam.split('-').join(' ')
    )
  );
