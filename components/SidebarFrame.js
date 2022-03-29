import React from 'react'
import { Button, Avatar } from '@mui/material';
import style from '../styles/SidebarFrame.module.css'
import { auth } from '../lib/firebaseInit';
import { signOutUser, googleSignIn } from "../lib/auth";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useStyles } from '../lib/theme'

function SidebarFrame() {
    const [user, loading, error] = useAuthState(auth);


    return (
        <div className={style.sideBarFrame}>
            {user == null ? undefined : <Avatar src={user.photoURL} />}
            <div className={style.sideBarText}>
                <h3 className={style.h3}>{
                    user == null ? undefined : user.displayName
                }</h3>

                {user 
                ? 
                <Button variant="contained" color='secondary'  onClick={signOutUser}>Log Out</Button> 
                : 
                <Button variant="secondary"  onClick={googleSignIn}>Log In</Button> }
            </div>
        </div>
    )
}

export default SidebarFrame
