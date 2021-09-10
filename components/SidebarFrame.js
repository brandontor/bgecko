import React from 'react'
import Button from '@material-ui/core/Button'
import { Avatar } from '@material-ui/core'

function SidebarFrame() {
    return (
        <div className="Sidebarframe">
            <Avatar src="./Assets/IMG-0750.jpg"/>
            <div className="frameText">
                <h3>Brandon</h3>
                <Button variant="contained" color="secondary" size="small">Log Out</Button>
            </div>
        </div>
    )
}

export default SidebarFrame
