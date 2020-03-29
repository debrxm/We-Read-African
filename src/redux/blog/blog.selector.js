import { createSelector } from 'reselect';

const selectBlog = state => state.blog;

export const selectAllBlog = createSelector([selectBlog], blog => blog.blogs);

export const selectTagPost = (blogUrlParam, url) =>
  createSelector([selectAllBlog], blog =>
    blog.filter((item, index) => item.tag.toLowerCase() === blogUrlParam)
  );
export const selectBlogPost = (blogUrlParam, url) =>
  createSelector([selectAllBlog], blog =>
    blog.filter(
      (item, index) =>
        item.title.toLowerCase() === blogUrlParam.split('-').join(' ')
    )
  );
