import React from 'react'
import style from '../styles/Leaderboard.module.css'
import LeaderboardItem from './LeaderboardItem'

function Leaderboard() {
    return (
        <div className={style.leaderBoardContainer}>
            <div className={style.leaderBoardHeader}>
                <p>#</p>
                <p>Coin</p>
                <p>Price</p>
                <p>24h</p>
                <p>Market Cap</p>
            </div>
            <LeaderboardItem></LeaderboardItem>
        </div>
    )
}

export default Leaderboard
