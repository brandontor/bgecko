import React, {useState, useEffect, useRef} from 'react'
import style from './Leaderboard.module.css'
import LeaderBoardHeader from './LeaderBoardHeader'
import LeaderBoardRow from './LeaderBoardRow'
import Pagination from '@mui/material/Pagination';
import { StylesContext } from '@material-ui/styles';
// import Pagination from './Pagination'

function Leaderboard({leaderBoardData, loading}) {
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(10)
    const [pageNumbers, setPageNumbers] = useState([])
    const pageRef = useRef()

    if (loading) { 
        return <h2>Loading...</h2>
    }

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = leaderBoardData.slice(indexOfFirstPost, indexOfLastPost)
    const paginate = (pageNumber) => {
        console.log('this is page Number', pageNumber)
        if (pageNumber.getAttribute("aria-label") === "Go to next page") {
            console.log('go to next page dude')
            setCurrentPage(currentPage + 1)
            console.log(currentPage)
        } else if (pageNumber.getAttribute("aria-label") === "Go to previous page") {
            console.log('go to previous page dude')
            setCurrentPage(currentPage - 1)
        } else {
            setCurrentPage(parseInt(pageNumber.innerText))
            console.log('I pressed something', currentPage)
        }
    }

    const Numbers = []
    for(let i=1; i <= Math.ceil(leaderBoardData.length/postsPerPage); i++) {
        Numbers.push(i)
    }
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
            <div className={style.paginationContainer}>
            <Pagination ref={pageRef} page={currentPage} count={Numbers.length} shape="rounded"  onChange={(e)=>{paginate(e.currentTarget)}}></Pagination>
            </div>
            
            {/* <Pagination totalPosts={leaderBoardData.length} postsPerPage={postsPerPage} paginate={paginate}></Pagination> */}
        </div>
    )
}

export default Leaderboard
