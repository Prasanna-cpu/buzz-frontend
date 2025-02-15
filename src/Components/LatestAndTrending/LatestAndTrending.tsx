import React, {useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Brightness6Icon from '@mui/icons-material/Brightness6'
import {Button} from "@mui/material";
import SubscriptionModal from "../SubscriptionModal/SubscriptionModal.tsx";

const LatestAndTrending: React.FC= () => {

    const [openSubscriptionModal,setOpenSubscriptionModal]=useState(false)

    function handleOpenSubscriptionModal(){
        setOpenSubscriptionModal(true)
    }

    function handleCloseSubscriptionModal(){
        setOpenSubscriptionModal(false)
    }

    function toggleTheme(){

    }

    return (
        <div className={"py-5 sticky top "}>

            <div className={"relative flex items-center"}>
                <input type={"text"} className={"py-3 rounded-full text-gray-500 w-full pl-12"}/>

                <div className={'absolute top-0 left-0 pl-3 pt-3'}>
                    <SearchIcon className={"text-gray-500"}/>
                </div>

                <Brightness6Icon onClick={toggleTheme} className={"ml-3 cursor-pointer"}/>

            </div>

            <section className={"my-5"}>
                <h1 className={"text-xl font-bold"}>Get Verified</h1>
                <h1 className={"font-bold my-2"}>Subscribe to unlock new features</h1>

                <Button variant={"contained"} sx={{padding:"10px",paddingX:"20px",borderRadius:"25px"}} onClick={handleOpenSubscriptionModal}>
                    Get Verified
                </Button>

                <section className={"mt-7 space-y-5"}>
                    <h1 className={"font-bold text-xl py-1"}>Latest Buzz</h1>
                    <div>
                        <p className={"text-sm"}></p>
                    </div>
                </section>


                <section>
                    <SubscriptionModal open={openSubscriptionModal} handleClose={handleCloseSubscriptionModal}/>
                </section>

            </section>
        </div>
    );
};

export default LatestAndTrending;