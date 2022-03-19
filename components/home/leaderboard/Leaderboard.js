import React, {useState, useEffect} from 'react'
import style from './Leaderboard.module.css'
import LeaderBoardHeader from './LeaderBoardHeader'
import LeaderBoardRow from './LeaderBoardRow'
// import Pagination from '@mui/material/Pagination';
import Pagination from './Pagination'

function Leaderboard({leaderBoardData, loading}) {
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(10)
    const [pageNumbers, setPageNumbers] = useState([])

    if (loading) { 
        return <h2>Loading...</h2>
    }

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = leaderBoardData.slice(indexOfFirstPost, indexOfLastPost)
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    console.log('This is the number of pages if page count is 10',pageNumbers)
    console.log(Math.ceil(leaderBoardData.length/postsPerPage))
    console.log('This My Data Boy',leaderBoardData)
    //leaderBoardData.name
    //.symbol
    //.market_cap
    //.market_cap_change_percentage_24h
    //.image
    //.symbol

    return (
        <div className={style.leaderBoardContainer}>
            <LeaderBoardHeader></LeaderBoardHeader>
            {/* <LeaderBoardRow></LeaderBoardRow> */}
            {currentPosts.map((post, index) => {
                const { name, symbol, market_cap, market_cap_change_percentage_24h, image, market_cap_rank, current_price } = post
                const params = {name, symbol, market_cap, market_cap_change_percentage_24h, market_cap_rank, image, current_price}
              return <LeaderBoardRow key={index} {...params} ></LeaderBoardRow>
            })}
            <Pagination totalPosts={leaderBoardData.length} postsPerPage={postsPerPage} paginate={paginate}></Pagination>
        </div>
    )
}

export default Leaderboard
