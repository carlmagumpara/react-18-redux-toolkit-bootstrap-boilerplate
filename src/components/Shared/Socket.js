import { useEffect } from 'react';
import { useAuth } from 'hooks/useAuth';
import Echo from 'helpers/echo';
import { useGlobalState } from 'hooks/onlineUsersState';

function Socket() {
  const auth = useAuth();
  const [online_users, setOnlineUsers] = useGlobalState('online_users');

  useEffect(() => {
    if (auth.getToken) {
      Echo(auth.getToken).join('global')
      .here(users => {
        // console.log('users here', users);

        setOnlineUsers(users);
      })
      .joining(user => {
        console.log('joining here', user);

        setOnlineUsers(prevState => [...prevState, user]);
      })
      .leaving(user => {
        console.log('leaving here', user);

        setOnlineUsers(prevState => prevState.filter(_user => _user.user_id !== user.user_id));
      })
      .listen('UserOnlineEvent', data => {
        console.log('UserOnlineEvent', data);
      })
      .listen('UserOfflineEvent', data => {
        console.log('UserOfflineEvent', data);
      });
    }
  }, [auth.getToken]);

  console.log('online_users', online_users);

  return null;
}

export default Socket;
