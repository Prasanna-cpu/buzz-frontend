import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import {Avatar, Menu, MenuItem} from "@mui/material";
import {useNavigate} from "react-router-dom";
import PhotoIcon from "@mui/icons-material/Photo";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import TagFacesIcon from '@mui/icons-material/TagFaces';
// import PostCard from "../PostCard/PostCard.tsx";
import {useFormik} from "formik";
import {useState} from "react";


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    p: 4,
    outline:'none',
    borderRadius:4
};

export default function ReplyModal({handleClose,open}) {
    // const [open, setOpen] = React.useState(false);
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);

    const [uploadingImage,setUploadingImage]=useState<boolean>(false)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [selectedImage,setSelectedImage]=useState<string | null | ArrayBuffer>('')

    const navigate=useNavigate()

    function handleSubmit(values){
        console.log("Handle Submit:",values)
    }
    const handleSelectImage=(e:React.ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault()
        setUploadingImage(true)
        const imgUrl=e.target.files?.[0]
        // formik.setFieldValue("image",imgUrl)
        // setSelectedImage(imgUrl)
        // setUploadingImage(false)
        if(imgUrl){
            const reader:FileReader=new FileReader()
            reader.onloadend = ()=>{
                setSelectedImage(reader.result)
                formik.setFieldValue("image",imgUrl)
                setUploadingImage(false)
            }
            reader.readAsDataURL(imgUrl)
        }
    }

    const formik=useFormik({
        initialValue:{
            content:"",
            image:"",
            postId:8
        },
        onSubmit:handleSubmit
    })


    // @ts-ignore
    return (
        <div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div>
                        <Avatar
                            src={''}
                            onClick={() => navigate(`/profile/${8}`)}
                            className={'cursor-pointer'}
                            alt={'username'}
                        />
                        <div className={'w-full'}>
                            <div className={'flex justify-between items-center'}>
                                <div className={'flex cursor-pointer items-center space-x-3 '}>
                        <span className={"font-semibold"}>
                            Kumar
                        </span>
                                    <span className={'text-gray-600'}>
                            @kumar227
                        </span>
                                    <p className={"text-gray-300 text-sm"}>Verified</p>
                                </div>


                            </div>
                            <div className={'mt-2'}>
                                <div className={'cursor-pointer'} onClick={() => navigate(`/post/${8}`)}>
                                    <p className={"mb-1.5 p-0"}>How's the day</p>
                                    {/*<img src={""}*/}
                                    {/*     className={'w-[28rem] border border-gray-400 p-5 rounded-md border-none'}*/}
                                    {/*     alt={"Post Image"}/>*/}
                                </div>


                            </div>
                        </div>
                        <section className={"py-10"}>
                            <div className={'flex space-x-5'}>
                                <Avatar alt={"username"} src={""}/>
                                <div className={'w-full'}>
                                    <form onSubmit={formik.handleSubmit}>
                                        <div>
                                            <input
                                                type={"text"}
                                                // name={"content"}
                                                placeholder={"What is happening"}
                                                className={'border-none outline-none text-sm bg-transparent'}
                                                {...formik.getFieldProps("content")}
                                                {...formik.errors.content && formik.touched.content && (
                                                    <span>{formik.errors.content}</span>
                                                )}
                                            />
                                        </div>

                                        <div className={'flex justify-between items-center mt-5'}>
                                            <div className={"items-center flex space-x-5"}>

                                                <label
                                                    className={"flex items-center space-x-2 rounded-md cursor-pointer"}>
                                                    <PhotoIcon className={"text-[blue] cursor-pointer"}/>
                                                    <input type={'file'} name={'imageFile'} className={'hidden'}
                                                           onChange={handleSelectImage}/>
                                                </label>

                                                <FmdGoodIcon className={"text-[blue]"}/>

                                                <TagFacesIcon className={"text-[blue]"}/>

                                            </div>

                                            <div>
                                                <Button
                                                    sx={{
                                                        width: "100%",
                                                        borderRadius: "18px",
                                                        py: "15px",
                                                        px: "20px",
                                                        bgcolor: "blue"
                                                    }} variant={"contained"}
                                                    type={"submit"}
                                                >
                                                    Post
                                                </Button>
                                            </div>

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </section>

                    </div>

                </Box>
            </Modal>
        </div>
    );
}
