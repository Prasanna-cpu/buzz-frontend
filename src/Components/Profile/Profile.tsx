import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import {Avatar, Button, Tab} from "@mui/material";
import {BusinessCenter, LocationOn} from "@mui/icons-material";
import {SlCalender} from "react-icons/sl";
import {TabContext, TabList, TabPanel} from "@mui/lab";
import Box from "@mui/material/Box";
import PostCard from "../PostCard/PostCard.tsx";
import ProfileModal from "../ProfileModal/ProfileModal.tsx";


const Profile : React.FC= () => {

    const [tabValue,setTabValue]=useState("1")

    const [openProfileModal,setOpenProfileModal]=useState<boolean>(false)

    const navigate=useNavigate()

    function handleOpenProfileModal() {
        setOpenProfileModal(true)
    }

    function handleFollowUser(){
        console.log("follow")
    }

    function handleTabChange(event,newValue) {
        setTabValue(newValue)

        if(newValue==4){
            console.log("tab 4 likes")
        }
        else if(newValue==1){
            console.log("tab 1 users posts")
        }
    }

    function handleClose(){
        setOpenProfileModal(false)
    }


    return (
        <div>
            <section className={"z-50 flex items-center top-0 bg-opacity-90"}>
                <KeyboardBackspaceIcon className={"cursor-pointer"} onClick={()=>navigate(-1)}/>

                <h1 className={"py-5 text-xl font-bold opacity-90 ml-5"}>Prasanna Kumar</h1>

            </section>

            <section>
                <img className={"w-[100%] h-[17rem] object-cover"} src={"https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg"}/>
            </section>

            <section className={"pl-6"}>

                <div className={"flex justify-between items-start mt-5 h-[5rem]"}>
                    <Avatar
                        alt={"profile img"}

                        src={""}

                        className={"transform -translate-y-20 ml-3.5"}

                        sx={{
                            width: "7rem",
                            height: "7rem",
                            border: "4px solid grey"
                        }}

                    />

                    {
                        true ? (
                            <Button onClick={handleOpenProfileModal} variant={"contained"} sx={{borderRadius: "20px"}}>
                                Edit Profile
                            </Button>
                        ) : (
                            <Button onClick={handleFollowUser} variant={"contained"} sx={{borderRadius: "20px"}}>
                                Follow
                            </Button>
                        )
                    }
                </div>

                <div>
                    <div className={"flex items-center"}>
                        <h1 className={"font-bold"}>Prasanna Kumar</h1>

                        {/*<img*/}
                        {/*    className={"ml-2 w-5 h-5"}*/}
                        {/*    src={""}*/}
                        {/*    alt={""}*/}
                        {/*    />*/}
                        <p className={"text-gray-300 text-sm ml-2"}>Verified</p>
                    </div>
                    <div className={"flex items-center text-gray-500"}>
                        <BusinessCenter/>
                        <p className={"ml-2"}>VIT Chennai</p>
                    </div>
                    <div className={"flex items-center text-gray-500"}>
                        <LocationOn/>
                        <p className={"ml-2"}>Chennai</p>
                    </div>
                    <div className={"flex items-center text-gray-500"}>
                        <SlCalender/>
                        <p className={"ml-2"}>July 2002</p>
                    </div>
                </div>

                <div className={"flex items-center space-x-1 font-semibold mt-3"}>
                    <span>400</span>
                    <span className={"text-gray-500"}>Followers</span>

                </div>

                <div className={"flex items-center space-x-1 font-semibold mt-1.5"}>
                    <span>200</span>
                    <span className={"text-gray-500"}>Following</span>

                </div>


            </section>

            <section className={"py-5"}>
                <TabContext value={tabValue}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleTabChange} aria-label="lab API tabs example">
                            <Tab label="Posts" value="1" />
                            <Tab label="Replies" value="2" />
                            <Tab label="Media" value="3" />
                            <Tab label="Likes" value="4" />
                        </TabList>
                    </Box>
                    <TabPanel value="1">

                        {
                            [1,1,1,1,1,1,1].map((_)=>(
                                <PostCard/>
                            ))
                        }

                    </TabPanel>
                    <TabPanel value="2">Replies</TabPanel>
                    <TabPanel value="3">Media</TabPanel>
                    <TabPanel value={"4"}>Likes</TabPanel>
                </TabContext>
            </section>


            <section>
                <ProfileModal handleClose={handleClose} open={openProfileModal}/>
            </section>

        </div>
    );
};

export default Profile;