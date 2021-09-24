import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Layout.module.css'
import Link from 'next/link'

export default function Home(data) {

  console.log(data);
  return (
    <div className={styles.container}>
      <Head>
        <title>bGecko</title>
        <meta name="Cryptocurrency information site" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;700&display=swap" rel="stylesheet"/> 
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to bGecko
        </h1>

        <p className={styles.description}>
          Get started <Link href="/home"><a>here</a></Link>
        </p>
      </main>
    </div>
  )
}

