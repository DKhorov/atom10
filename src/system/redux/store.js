// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import { storeReducer } from './slices/store';
import { postsReducer } from './slices/posts';
import profileReducer from './slices/profile';
import { authReducer } from './slices/auth';
import getmeReducer from './slices/getme';
import playerReducer from './slices/player';
import { uiReducer } from './slices/store';
import commentsReducer from './slices/comments';

const store = configureStore({
  reducer: {
    store: storeReducer,
    posts: postsReducer,
    profile: profileReducer,
    auth: authReducer,
    user: getmeReducer,
    player: playerReducer,
    ui: uiReducer,
    comments: commentsReducer,
  },
});

export default store;