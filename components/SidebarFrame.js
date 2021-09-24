import React from 'react'
import Button from '@material-ui/core/Button'
import Avatar  from '@material-ui/core/Avatar'
import style from './SidebarFrame.module.css'

function SidebarFrame() {




    return (
        <div className={style.SideBarFrame}>
            <Avatar src="/IMG-0750.jpg" style={{height: '98px', width: '99px'}}/>
            <div className={style.frameText}>
                <h3 className={style.h3}>Brandon</h3>
                <Button variant="contained" style={{backgroundColor: '#BF616A', color: '#E5E9F0', width: '90px', height: '25px', fontSize: '12px', paddingTop: '10px', fontWeight: '700'}}>Log Out</Button>
            </div>
        </div>
    )
}

export default SidebarFrame
