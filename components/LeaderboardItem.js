import React from 'react'
import style from '../styles/LeaderboardItem.module.css'
function LeaderboardItem() {
    return (
        <div className={style.LeaderboardItemContainer}>
                <span>Star</span>
                <p>#</p>
                <p>Coin</p>
                <p>Price</p>
                <p>24h</p>
                <p>Market Cap</p>
        </div>
    )
}

export default LeaderboardItem
