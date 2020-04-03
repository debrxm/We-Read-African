import BlogActionTypes from './blog.types';

export const updateCategories = categoriesMap => ({
  type: BlogActionTypes.UPDATE_CATEGORIES,
  payload: categoriesMap
});
export const updateBlogComments = comment => ({
  type: BlogActionTypes.UPDATE_BLOG_COMMENTS,
  payload: comment
});
export const updateBlogViews = views => ({
  type: BlogActionTypes.UPDATE_BLOG_VIEWS,
  payload: views
});
