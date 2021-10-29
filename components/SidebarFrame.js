import React from 'react'
import Button from '@material-ui/core/Button'
import Avatar  from '@material-ui/core/Avatar'
import style from './SidebarFrame.module.css'
import { useContext } from 'react';
import { UserContext } from '../lib/context';
import { googleSignOut } from "../lib/auth.js";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../lib/firebaseInit';

function SidebarFrame() {

    const [user, loading, error] = useAuthState(auth);
    
    const buttonStyles = {
        backgroundColor: '#BF616A',
        color: '#E5E9F0',
        width: '90px',
        height: '25px',
        fontSize: '0.6em',
        paddingTop: '10px',
        fontWeight: '700'
    }

    const avatarStyles = {
        height: '30%'
    }

    return (
        <div className={style.sideBarFrame}>
            <Avatar src="/IMG-0750.jpg" style={avatarStyles}/>
            <div className={style.frameText}>
                <h3 className={style.h3}>{
                    user == null ? undefined : user.displayName
                }</h3>
                <Button variant="contained" style={buttonStyles} onClick={googleSignOut}>Log Out</Button>
            </div>
        </div>
    )
}

export default SidebarFrame
