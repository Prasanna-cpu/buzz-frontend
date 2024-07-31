import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {IconButton} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {useState} from "react";
import {FiberManualRecord} from "@mui/icons-material";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    borderRadius:4,
    outline:"none",
    p: 4,
};

const features:string[]=["Prioritized rankings in conversations and search" , "See approximately twice as many posts between ads in your personalized timelines","Post longer videos with quality upto 4k"]

export default function SubscriptionModal({open,handleClose}) {

    const [plan,setPlan]=useState("annually")

    return (
        <div>
            {/*<Button onClick={handleOpen}>Open modal</Button>*/}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className={"flex items-center space-x-3"}>
                        <IconButton onClick={handleClose} aria-label={"delete"}>
                            <CloseIcon/>

                        </IconButton>

                        <div className={"flex justify-center py-10"}>
                            <div className={"w-[80%] space-y-10"}>

                                <div
                                    className={"p-5 rounded-md flex items-center justify-between shadow-lg bg-blue-100"}>
                                    <h1 className={"text-lg pr-5"}>Verified subscribers with a verified phone number
                                        will get blue checkmark once approved</h1>
                                    <img src={""} alt={"image-tick"} className={"w-24 h-24"}/>
                                </div>

                                <div className={"flex justify-between border rounded-full px-5 py-3 bg-amber-200"}>
                                    <div>
                                        <span className={`${plan === "annually" ? "text-black" : "text-gray-400"}`}
                                              onClick={() => setPlan("annually")}>
                                            Annual Subscription
                                        </span>

                                        <span className={"text-green-800 text-sm ml-5"}>
                                            SAVE 15%
                                        </span>

                                    </div>

                                    <p className={`${plan === "monthly" ? "text-black" : "text-gray-400"} cursor-pointer`}
                                       onClick={() => setPlan("monthly")}>
                                        Monthly Subscription
                                    </p>


                                </div>
                                <div className={"space-y-3"}>
                                    {features.map((feature) => (

                                            <div className={"flex items-center space-x-5 "}>
                                                <FiberManualRecord
                                                    sx={{
                                                        width: "12px",
                                                        height: "12px",
                                                    }}
                                                />
                                                <p className={"text-md"}>
                                                    {
                                                        feature
                                                    }
                                                </p>
                                            </div>

                                    ))}
                                </div>

                                <div className={"cursor-pointer flex justify-center bg-gray-800 text-white rounded-full px-5 py-3"}>
                                    <span className={"line-through italic"}>
                                        ₹5,499.00
                                    </span>
                                    <span className={"px-5"}>
                                        ₹4199.00/year
                                    </span>
                                </div>

                            </div>
                        </div>

                    </div>
                    {/*<Button type={"submit"}>Save</Button>*/}
                </Box>
            </Modal>
        </div>
    );
}
