import { createGlobalState } from 'react-hooks-global-state';

const initialState = { online_users: [] };
const { useGlobalState } = createGlobalState(initialState);

export {
  useGlobalState,
}