import Head from 'next/head'
import Link from 'next/link'
import Button from '@mui/material/Button';
import style from './index.module.css'
import { googleSignIn } from "../lib/auth.js";

export default function Home(data) {

  console.log(data);

  const buttonStyles = {
    backgroundColor: '#BF616A',
    color: '#E5E9F0',
    fontSize: '1.0em',
    paddingTop: '10px',
    fontWeight: '700'
}

  return (
    <div>
      <Head>
        <title>bGecko</title>
        <meta name="Cryptocurrency information site" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;700&display=swap" rel="stylesheet"/> 
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous"></link>
      </Head>

      <main className={style.welcomePage}>
        <div className={style.textWrapper}>
          <h1>Welcome to bGecko <i className="fab fa-bitcoin" style={{color: "#f2a900"}}></i></h1>
          <Button variant="contained" style={buttonStyles} onClick={googleSignIn}>Sign In</Button>
        </div> 
      </main>
    </div>
  )
}

