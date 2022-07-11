import { combineReducers } from 'redux';
import userReducer from './user';
import tokenReducer from './token';

import { meApi } from '../services/me';
import { userApi } from '../services/user';
import { loginApi } from '../services/login';
import { registerApi } from '../services/register';

const appReducer = combineReducers({
  user: userReducer,
  token: tokenReducer,
  [meApi.reducerPath]: meApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  [loginApi.reducerPath]: loginApi.reducer,
  [registerApi.reducerPath]: registerApi.reducer,
});

export default appReducer;