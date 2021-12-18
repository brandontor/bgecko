import React, {useState} from 'react'
import style from './LeaderBoardRow.module.css'
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';

function LeaderBoardRow() {

    const [star, setStar] = useState()

    const starHandler = () => {

    }


    return (
        <div className={style.container}>
            <p><StarOutlineIcon></StarOutlineIcon></p>
            <p>#</p>
            <p>Coin</p>
            <p>Price</p>
            <p>24h</p>
            <p>Mkt Cap</p>
        </div>
    )
}

export default LeaderBoardRow
