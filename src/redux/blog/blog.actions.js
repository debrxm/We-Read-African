import BlogActionTypes from './blog.types';

export const updateCategories = categoriesMap => ({
  type: BlogActionTypes.UPDATE_CATEGORIES,
  payload: categoriesMap
});
