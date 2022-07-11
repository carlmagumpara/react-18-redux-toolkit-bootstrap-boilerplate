import { useEffect } from 'react';
import LaravelEcho from 'laravel-echo'
import { isDev, WEB_SOCKET_AUTH, BASE_URL } from './config';

let Echo;

function Socket(token) {
  window.Pusher = require('pusher-js');
  Echo = new LaravelEcho({
    broadcaster: 'pusher',
    key: 'wzQK8vsdwMlyogC8AJN19tSI52gDDNcJ091mb9SnN7ip8wWPkd',
    wsHost: BASE_URL,
    wsPort: 6001,
    wssPort: 443,
    enabledTransports: ['ws', 'wss'],
    disableStats: true,
    cluster: 'eu',
    ...(isDev() ? { forceTLS: false } : {})
  });

  Echo.connector.pusher.config.authEndpoint = WEB_SOCKET_AUTH;
  Echo.connector.pusher.config.auth.headers['Authorization'] = `Bearer ${token}`;

  return Echo;
}

export default Socket;