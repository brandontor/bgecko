import '../styles/globals.css'
import Layout from '../components/Layout'
import { UserContext } from '../lib/context'

import {useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth'
import { useUserData} from '../lib/hooks';

function MyApp({ Component, pageProps }) {

  const userData = useUserData;

  return (
    <UserContext.Provider value={userData}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </UserContext.Provider>
  )
}

export default MyApp
