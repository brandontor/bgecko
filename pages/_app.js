import '../styles/globals.css'
import Layout from '../components/Layout'
import { theme } from '../lib/theme'
import { ThemeProvider } from '@emotion/react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useUserData} from '../lib/hooks';

function MyApp({ Component, pageProps }) {

  const userData = useUserData;

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
    
  )
}

export default MyApp
