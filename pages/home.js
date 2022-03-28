import React, {useEffect, useState} from 'react'
import style from '../styles/home.module.css'
import Leaderboard from '../components/home/leaderboard/Leaderboard'
import handler from './api/home'
import SearchBar from '../components/home/searchbar/SearchBar'

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
            <header className={style.header}>
                    <h1>bGecko<i className="fab fa-bitcoin"></i></h1>
                    <SearchBar></SearchBar>
            </header>
            <Leaderboard leaderBoardData={leaderBoardData} loading={loading}/>
        </div>
    )
}

export default Home
