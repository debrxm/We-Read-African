import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import BlogReducer from './blog/blog.reducer';
import ForumReducer from './forum/forum.reducer';
import UserReducer from './user/user.reducer';
import PodcastReducer from './podcast/podcast.reducer';
import ComingSoonReducer from './coming-soon/coming-soon.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['comingSoon', 'blog', 'forum', 'podcast'],
};

const rootReducer = combineReducers({
  blog: BlogReducer,
  forum: ForumReducer,
  user: UserReducer,
  podcast: PodcastReducer,
  comingSoon: ComingSoonReducer
});

export default persistReducer(persistConfig, rootReducer);
