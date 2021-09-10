import React from 'react'
import SidebarFrame from './SidebarFrame'
import HomeIcon from '@material-ui/icons/Home';

function Sidebar() {
    return (
        <div className="Sidebar">
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
