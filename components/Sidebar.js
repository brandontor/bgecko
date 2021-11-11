import React from 'react'
import style from '../styles/Sidebar.module.css'
import SidebarFrame from './SidebarFrame'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import SettingsIcon from '@mui/icons-material/Settings';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import HomeIcon from '@mui/icons-material/Home'
import { ListItemText, ListItemIcon, ListItemButton, List, Box } from '@mui/material'

function Sidebar() {
    const [selectedIndex, setSelectedIndex] = React.useState(1);


    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
      };

      const iconStyles = {
          color: '#8FBCBB',
          margin: '20px'
      }

      const textStyles = {
          color: '#88C0D0',
          margin: '5%',
          marginTop: '7%'
      }

      const listItemStyles = {
          width: '100%',
          minHeight: '40px'
      }

      
    return (
        <div className={style.sidebar}>
            <SidebarFrame></SidebarFrame>
            <Box sx={{ width: '100%', justifyContent: 'center'}}>
                <List component="nav" aria-label="main mailbox folders">
                    <ListItemButton selected={selectedIndex === 0} onClick={(event) => handleListItemClick(event, 0)} style={listItemStyles}>
                        <ListItemIcon> <HomeIcon fontSize="medium" style={iconStyles}></HomeIcon></ListItemIcon>
                        <ListItemText primary="Home" style={textStyles} className={style.text}/>
                    </ListItemButton>
                    <ListItemButton selected={selectedIndex === 1} onClick={(event) => handleListItemClick(event, 1)} style={listItemStyles}>
                        <ListItemIcon><LocalFireDepartmentIcon fontSize="medium" style={iconStyles}></LocalFireDepartmentIcon></ListItemIcon>
                        <ListItemText primary="Watch List" style={textStyles} className={style.text}/>
                    </ListItemButton>
                    <ListItemButton selected={selectedIndex === 2} onClick={(event) => handleListItemClick(event, 2)} style={listItemStyles}>
                        <ListItemIcon><SettingsIcon fontSize="medium" style={iconStyles}></SettingsIcon></ListItemIcon>
                        <ListItemText primary="Settings" style={textStyles} className={style.text}/>
                    </ListItemButton>
                    <ListItemButton selected={selectedIndex === 3} onClick={(event) => handleListItemClick(event, 3)} style={listItemStyles}>
                        <ListItemIcon><FormatListBulletedIcon fontSize="medium" style={iconStyles}></FormatListBulletedIcon></ListItemIcon>
                        <ListItemText primary="Useful Links" style={textStyles} className={style.text}/>
                    </ListItemButton>
                </List>
            </Box>
        </div>
    )
}

export default Sidebar
