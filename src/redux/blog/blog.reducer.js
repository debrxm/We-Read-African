import BlogActionTypes from './blog.types';
const INITIAL_STATE = {
  blogs: null
};

const BlogReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BlogActionTypes.UPDATE_CATEGORIES:
      return {
        ...state,
        blogs: action.payload
      };
    default:
      return state;
  }
};

export default BlogReducer;
