import React, {useState} from 'react'
import style from './LeaderBoardRow.module.css'
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';

function LeaderBoardRow() {

    const [star, setStar] = useState(false)

    const starHandler = () => {
        if(star) {
            setStar(false)
        } else {
            setStar(true)
        }
    }


    return (
        <div className={style.container}>
            <p onClick={starHandler}>{star ? <StarIcon></StarIcon> : <StarOutlineIcon></StarOutlineIcon>}</p>
            <p>#</p>
            <p>Coin</p>
            <p>Price</p>
            <p>24h</p>
            <p>Mkt Cap</p>
        </div>
    )
}

export default LeaderBoardRow
