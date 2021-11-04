import React from 'react'
import {Button, Avatar} from '@material-ui/core';
import style from './SidebarFrame.module.css'
import { auth } from '../lib/firebaseInit';
import { signOutUser, googleSignIn } from "../lib/auth";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useStyles } from '../lib/theme'

function SidebarFrame() {
    const [user, loading, error] = useAuthState(auth);

    const classes = useStyles();

    return (
        <div className={style.sideBarFrame}>
            {user == null ? undefined : <Avatar src={user.photoURL} className={classes.avatar}/>}
            <div className={style.sideBarText}>
                <h3 className={style.h3}>{
                    user == null ? undefined : user.displayName
                }</h3>

                {user 
                ? 
                <Button variant="contained" className={classes.button} onClick={signOutUser}>Log Out</Button> 
                : 
                <Button variant="contained" className={classes.button} onClick={googleSignIn}>Log In</Button> }
            </div>
        </div>
    )
}

export default SidebarFrame
