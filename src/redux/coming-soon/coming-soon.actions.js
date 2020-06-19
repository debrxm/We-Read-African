import {
  ComingSoonActionTypes
} from './coming-soon.types';

export const setSubscribed = isSubscribed => ({
  type: ComingSoonActionTypes.CHECK_SUBSCRIBED,
  payload: isSubscribed
});