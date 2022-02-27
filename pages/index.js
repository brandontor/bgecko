import style from '../styles/index.module.css'
import Head from 'next/head'
import Link from 'next/link'
import Button from '@mui/material/Button';
import { googleSignIn } from "../lib/auth.js";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../lib/firebaseInit';


export default function Home(data) {

   const [user, loading, error] = useAuthState(auth);


    const buttonStyles = {
      backgroundColor: '#BF616A',
      color: '#E5E9F0',
      fontSize: '1.0em',
      paddingTop: '10px',
      fontWeight: '700',
      maxWidth: '225px'
  }

  return (
    <div>
 
      <main className={style.welcomePage}>
        <div className={style.textWrapper}>
          <h1>Welcome to bGecko <i className="fab fa-bitcoin" style={{color: "#f2a900"}}></i></h1>
          {user ? <Link href="/home" passHref><Button variant="contained" style={buttonStyles}>{user.displayName} Please Continue :)</Button></Link> : <Button variant="contained" style={buttonStyles} onClick={googleSignIn}>Sign In</Button> }
        </div> 
      </main>
    </div>
  )
}
