import React from "react";
import {NavigationItem, NavigationMenu} from "./NavigationMenu.tsx";
import {useNavigate} from "react-router-dom";
import {Avatar, Button, Menu, MenuItem} from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


const Navigation : React.FC=()=>{

    const navigate=useNavigate()

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    // function pageNavigate(title:string){
    //     if(title==="Home"){
    //         navigate("/home")
    //     }
    //
    // }


    function handleLogout() {
        console.log("logout")
        handleClose()
    }

    return(
        <div className={'h-screen sticky top-0'}>
            <div>
                <div className={'py-5'}>
                    Logo
                </div>
                <div className={'space-y-6'}>
                    {
                        NavigationMenu.map((item:NavigationItem)=>
                            <div className={'cursor-pointer flex space-x-4 items-center'} onClick={()=>item.title==="Profile"?navigate(`/profile/${8}`):navigate(item.path)}>
                                {item.icon}
                                <p className={'text-lg'}>{item.title}</p>
                            </div>
                        )
                    }
                </div>
                <div className={'py-10'}>
                    <Button sx={{width:"100%",borderRadius:"29px",py:"15px",bgcolor:"blue"}} variant={"contained"}>
                        Post
                    </Button>
                </div>

                <div className={'flex items-center justify-between'}>
                    <div className={"flex items-center space-x-3"}>
                        <Avatar alt={"username"} src={""}/>
                        <div>
                            <span>Prasanna Kumar</span>
                            <div>
                                <span className={'opacity-70'}>@kumar227</span>
                            </div>
                        </div>

                    </div>
                </div>
                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <MoreHorizIcon/>
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >

                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>

            </div>
        </div>
    )
}

export default Navigation