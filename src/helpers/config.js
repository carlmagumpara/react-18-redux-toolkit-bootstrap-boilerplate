function isDev() {
  return (!process.env.NODE_ENV || process.env.NODE_ENV === 'development');
}

export const PROTOCOL = 'https://';
export const PORT = '';
export const BASE_URL = 'api.artist-ik.com';

// export const PROTOCOL = isDev() ? 'http://' : 'https://';
// export const PORT = isDev() ? ':8000' : '';
// export const BASE_URL = isDev() ?  `localhost` : 'api.artist-ik.com';

export const BASE_URL_WITH_PORT = `${PROTOCOL}${BASE_URL}${PORT}`;
export const API_URL = `${BASE_URL_WITH_PORT}/api`;
export const WEB_SOCKET_AUTH = `${API_URL}/broadcasting/auth`;
export {
  isDev
}