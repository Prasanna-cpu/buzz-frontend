import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {Avatar, Button, IconButton, TextField} from "@mui/material";

import {useFormik} from "formik";
import CloseIcon from '@mui/icons-material/Close';
import "./ProfileModal.css"

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    border: 'none',
    outline:'none',
    boxShadow: 24,
    borderRadius:'4px',
    p: 4,
};

export default function ProfileModal({open,handleClose}) {
    // const [open, setOpen] = React.useState(false);
    const [uploading,setUploading]=useState<boolean>(false);
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);
    // const [openProfileModal,setOpenProfileModal]=useState<boolean>(false)

    function handleSubmit(values) {
        console.log("Handle Submit:",values)
    }

    function handleImageChange(e:React.ChangeEvent<HTMLInputElement>) {
        setUploading(true)
        const {name}=e.target
        const file=e.target.files?.[0]
        formik.setFieldValue(name,file)
        setUploading(false)

    }

    const formik=useFormik({
        initialValues:{
            fullName:"",
            website:"",
            location:"",
            bio:"",
            backgroundImage:"",
            image:""
        },

        onSubmit:handleSubmit
    })

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
                    <form onSubmit={formik.handleSubmit}>
                        <div className={"flex items-center justify-between"}>
                            <div className={"flex items-center space-x-3"}>
                                <IconButton onClick={handleClose} aria-label={"delete"}>
                                    <CloseIcon/>

                                </IconButton>
                                <p className={"text-sm"}>Edit Profile</p>
                            </div>
                            <Button type={"submit"}>Save</Button>
                        </div>
                        <div className={" hideScrollBar overflow-scroll overflow-x-hidden h-[80vh]"}>
                            <React.Fragment>
                                <div className={"w-full"}>
                                    <div className={"relative"}>
                                        <img src={"https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg"} alt={"image"}
                                             className={"w-full h-[12rem] object-cover object-center"}/>
                                        <input
                                            type={"file"}
                                            className={"absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"}
                                            onChange={handleImageChange}
                                            name={"backgroundImage"}
                                        />
                                    </div>

                                    <div className={"w-full transform -translate-y-20 ml-4 h-[6rem]"}>
                                        <div className={"relative"}>
                                            <Avatar
                                                src={""}
                                                sx={{
                                                    width:"7rem",
                                                    height:"7rem",
                                                    border:"4px solid grey"
                                                }}
                                            />
                                            <input
                                                className={"absolute top-0 left-0 opacity-0 w-[10rem] h-full cursor-pointer"}
                                                onChange={handleImageChange}
                                                name={"image"}
                                                type={"file"}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </React.Fragment>


                            <div className={"space-y-3"}>
                                <TextField
                                    fullWidth
                                    id={"fullName"}
                                    name={"fullName"}
                                    label={"Full Name"}
                                    value={formik.values.fullName}
                                    onChange={formik.handleChange}
                                    error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                                    helperText={formik.touched.fullName && formik.errors.fullName}
                                    />
                                    <TextField
                                        fullWidth
                                        multiline
                                        rows={4}
                                        id={"bio"}
                                        name={"bio"}
                                        label={"Bio"}
                                        value={formik.values.bio}
                                        onChange={formik.handleChange}
                                        error={formik.touched.bio && Boolean(formik.errors.bio)}
                                        helperText={formik.touched.bio && formik.errors.bio}
                                    />
                                    <TextField
                                        fullWidth
                                        id={"website"}
                                        name={"website"}
                                        label={"website"}
                                        value={formik.values.website}
                                        onChange={formik.handleChange}
                                        error={formik.touched.website && Boolean(formik.errors.website)}
                                        helperText={formik.touched.website && formik.errors.website}
                                    />
                                    <TextField
                                        fullWidth
                                        id={"location"}
                                        name={"location"}
                                        label={"location"}
                                        value={formik.values.location}
                                        onChange={formik.handleChange}
                                        error={formik.touched.location && Boolean(formik.errors.location)}
                                        helperText={formik.touched.location && formik.errors.location}
                                    />
                                    <div className={"my-3"}>
                                        <p className={"text-lg"}>Birth date . edit</p>
                                        <p className={"text-2xl"}>July 22 , 2002</p>
                                    </div>
                                </div>

                        </div>
                    </form>
                </Box>
            </Modal>
        </div>
    );
}