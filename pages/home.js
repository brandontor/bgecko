import React, {useEffect, useState} from 'react'
import style from '../styles/home.module.css'
import Head from 'next/head'
import Leaderboard from '../components/home/leaderboard/Leaderboard'
import handler from './api/home'

function Home({}) {
    const [leaderBoardData, setLeaderBoardData] = useState()
    const [loading, setLoading] = useState(true)
    

    const getLeaderBoard = async() => {
        let data
        try{
            data = await handler()
        } catch(e) {
            console.log(e)
        }
        if (!data) return
        setLeaderBoardData(data)
        setLoading(false)
    }

    
    useEffect(() => {
        getLeaderBoard()
    }, [])

    
    
    return (
        <div className={style.home}>
            <Head>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossOrigin="anonymous"></link>
            </Head>
            <Leaderboard leaderBoardData={leaderBoardData} loading={loading}/>
        </div>
    )
}

export default Home
