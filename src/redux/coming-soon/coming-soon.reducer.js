import {
  ComingSoonActionTypes
} from './coming-soon.types';

const INITIAL_STATE = {
  isSubscribed: false
};

const ComingSoonReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ComingSoonActionTypes.CHECK_SUBSCRIBED:
      return {
        ...state,
        isSubscribed: true
      };
    default:
      return state;
  }
};

export default ComingSoonReducer;