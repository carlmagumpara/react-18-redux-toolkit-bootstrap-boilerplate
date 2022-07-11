import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import appReducer from './reducers';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import logger from 'redux-logger';

// Services
import { meApi } from './services/me';
import { userApi } from './services/user';
import { loginApi } from './services/login';
import { registerApi } from './services/register';

const persistConfig = {
  key: 'tch',
  storage
};

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    const {} = state
    state = {};
  }

  return appReducer(state, action);
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [
    thunk,
    logger,
    meApi.middleware,
    userApi.middleware,
    loginApi.middleware,
    registerApi.middleware,
  ],
});

let persistor = persistStore(store);

export {
  store,
  persistor,
};