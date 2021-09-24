import React from 'react'
import SidebarFrame from '../components/SidebarFrame'
import Layout from '../components/Layout'
import style from './home.module.css'

function Home() {
    return (
        <div className={style.home}>
            <Layout></Layout>
        </div>
    )
}

export default Home
