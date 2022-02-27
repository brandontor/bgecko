import React from 'react'
import style from './Leaderboard.module.css'
import LeaderBoardHeader from './LeaderBoardHeader'
import LeaderBoardRow from './LeaderBoardRow'

function Leaderboard() {
    return (
        <div className={style.leaderBoardContainer}>
            <LeaderBoardHeader></LeaderBoardHeader>
            <LeaderBoardRow></LeaderBoardRow>
        </div>
    )
}

export default Leaderboard
