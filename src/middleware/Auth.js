import { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import OneSignal from 'react-onesignal';
import { useAuth } from 'hooks/useAuth';

function Auth({ children }) {
  const auth = useAuth();
  const location = useLocation();

  useEffect(() => {
    if (auth.isAuthenticated) {
      // oneSignalInit();
    } else {
      // removeOneSignal();
    }
  }, [auth.isAuthenticated]);

  // const oneSignalInit = async () => {
  //   await OneSignal.init({ 
  //     appId: 'c12d0d01-44e5-440e-bcc9-b71d7ea8da61',
  //     autoRegister: true,
  //     notifyButton: {
  //       enable: false,
  //     },
  //   });
  //   OneSignal.setExternalUserId(auth.getId.toString());
  //   OneSignal.sendTags({
  //     name: auth.getName,
  //     user_id: auth.getId,
  //     role_id: auth.getRoleId,
  //   });
  //   OneSignal.setSubscription(true);
  // };

  // const removeOneSignal = () => {
  //   OneSignal.push(() => {
  //     OneSignal.deleteTags(['name', 'user_id', 'role_id']);
  //     OneSignal.removeExternalUserId();
  //   });
  // };

  if (!auth.isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return (
    <>
    </>
  )
}

export default Auth;