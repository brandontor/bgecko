import React from 'react'
import style from '../styles/home.module.css'
import Head from 'next/head'
import Leaderboard from '../components/home/leaderboard/Leaderboard'





function Home({}) {
    return (
        <div className={style.home}>
            <Head>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous"></link>
            </Head>
           
            <Leaderboard/>

        </div>
    )
}

export default Home
