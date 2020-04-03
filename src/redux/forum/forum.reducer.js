import ForumActionTypes from './forum.types';
const INITIAL_STATE = {
  forums: null,
  comments: [],
  views: []
};

const ForumReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ForumActionTypes.UPDATE_FORUMS:
      return {
        ...state,
        forums: action.payload
      };
    case ForumActionTypes.UPDATE_FORUM_COMMENTS:
      return {
        ...state,
        comments: action.payload
      };
    case ForumActionTypes.UPDATE_FORUM_VIEWS:
      return {
        ...state,
        views: action.payload
      };
    default:
      return state;
  }
};

export default ForumReducer;
