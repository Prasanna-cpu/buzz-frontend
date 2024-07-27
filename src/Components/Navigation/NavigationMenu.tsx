
import React from "react";
import MessageIcon from '@mui/icons-material/Message';
import ListAltIcon from '@mui/icons-material/ListAlt';
import GroupIcon from '@mui/icons-material/Group';
import VerifiedIcon from '@mui/icons-material/Verified';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PendingIcon from '@mui/icons-material/Pending';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';

export interface NavigationItem{
    title:string
    icon:React.ReactNode
    path:string
}

export const NavigationMenu:NavigationItem[]=[
    {
        title: "Home",
        icon:<HomeIcon/>,
        path:"/home"
    },
    {
        title:"Explore",
        icon:<ExploreIcon/>,
        path:"/explore"
    },
    {
        title:"Message",
        icon:<MessageIcon/>,
        path:"/message"
    },
    {
        title:"Notifications",
        icon:<NotificationsIcon/>,
        path:"/notifications"
    },
    {
        title:"Lists",
        icon:<ListAltIcon/>,
        path:"/list"
    },
    {
        title:"Communities",
        icon:<GroupIcon/>,
        path:"/communities"
    },
    {
        title:"Verified",
        icon:<VerifiedIcon/>,
        path:"/verified"
    },
    {
        title:"Profile",
        icon:<AccountCircleIcon/>,
        path:"/profile"
    },
    {
        title:"More",
        icon:<PendingIcon/>,
        path:"/more"
    }

]