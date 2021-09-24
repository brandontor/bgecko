import React from 'react'
import style from './Sidebar.module.css'
import SidebarFrame from './SidebarFrame'
import HomeIcon from '@mui/icons-material/Home';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import SettingsIcon from '@mui/icons-material/Settings';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';

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
          fontFamily: 'Mulish',
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
                        <ListItemText primary="Home" style={textStyles}/>
                    </ListItemButton>
                    <ListItemButton selected={selectedIndex === 1} onClick={(event) => handleListItemClick(event, 1)} style={listItemStyles}>
                        <ListItemIcon><LocalFireDepartmentIcon fontSize="medium" style={iconStyles}></LocalFireDepartmentIcon></ListItemIcon>
                        <ListItemText primary="Watch List" style={textStyles}/>
                    </ListItemButton>
                    <ListItemButton selected={selectedIndex === 2} onClick={(event) => handleListItemClick(event, 2)} style={listItemStyles}>
                        <ListItemIcon><SettingsIcon fontSize="medium" style={iconStyles}></SettingsIcon></ListItemIcon>
                        <ListItemText primary="Settings" style={textStyles}/>
                    </ListItemButton>
                    <ListItemButton selected={selectedIndex === 3} onClick={(event) => handleListItemClick(event, 3)} style={listItemStyles}>
                        <ListItemIcon><FormatListBulletedIcon fontSize="medium" style={iconStyles}></FormatListBulletedIcon></ListItemIcon>
                        <ListItemText primary="Useful Links" style={textStyles}/>
                    </ListItemButton>
                </List>
            </Box>
        </div>
    )
}

export default Sidebar
