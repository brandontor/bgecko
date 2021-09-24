import React from 'react'
import SidebarFrame from './SidebarFrame'
import HomeIcon from '@material-ui/icons/Home';
import style from './Sidebar.module.css'

function Sidebar() {
    return (
        <div className={style.Sidebar}>
            <SidebarFrame></SidebarFrame>
            <ul>
                <li><HomeIcon fontSize="medium" color="primary"></HomeIcon> </li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    )
}

export default Sidebar
