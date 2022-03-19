import React, {useState} from 'react'
import style from './LeaderBoardRow.module.css'
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';

function LeaderBoardRow({name, symbol, market_cap, market_cap_change_percentage_24h, market_cap_rank, image, current_price }) {

    const [star, setStar] = useState(false)

    const starHandler = () => {
        if(star) {
            setStar(false)
        } else {
            setStar(true)
        }
    }

      //leaderBoardData.name
        //.symbol
        //.market_cap
        //.market_cap_change_percentage_24h
        //.image
        //.symbol

    return (
        <div className={style.container}>
            <p onClick={starHandler}>{star ? <StarIcon></StarIcon> : <StarOutlineIcon></StarOutlineIcon>}</p>
            <p>{market_cap_rank}</p>
            <p>{name}</p>
            <p>{current_price}</p>
            <p>{market_cap_change_percentage_24h}</p>
            <p>{market_cap}</p>
        </div>
    )
}

export default LeaderBoardRow
