import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import BlogReducer from './blog/blog.reducer';
import ForumReducer from './forum/forum.reducer';
import UserReducer from './user/user.reducer';
import PodcastReducer from './podcast/podcast.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['blog', 'forum', 'podcast'],
};

const rootReducer = combineReducers({
  blog: BlogReducer,
  forum: ForumReducer,
  user: UserReducer,
  podcast: PodcastReducer,
});

export default persistReducer(persistConfig, rootReducer);
