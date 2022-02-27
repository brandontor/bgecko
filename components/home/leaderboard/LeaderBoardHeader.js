import React from 'react'
import style from './LeaderBoardHeader.module.css'
import StarOutlineIcon from '@mui/icons-material/StarOutline';


function LeaderBoardHeader() {
    return (
        <div className={style.container}>
            <p className={style.headerStar}><StarOutlineIcon></StarOutlineIcon></p>
            <p>#</p>
            <p>Coin</p>
            <p>Price</p>
            <p>24h</p>
            <p>Mkt Cap</p>
        </div>
    )
}

export default LeaderBoardHeader
