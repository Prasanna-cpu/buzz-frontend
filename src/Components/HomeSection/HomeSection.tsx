import {Avatar, Button} from "@mui/material";
import {useFormik} from "formik";
import * as Yup from "yup";
import PhotoIcon from '@mui/icons-material/Photo';
import React, {useState} from "react";
import TagFacesIcon from '@mui/icons-material/TagFaces';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import PostCard from "../PostCard/PostCard.tsx";


const validationSchema=Yup.object().shape({
    content: Yup.string().required("Post text is required"),

})

const HomeSection:React.FC=()=>{

    const [uploadingImage,setUploadingImage]=useState<boolean>(false)
    const [selectedImage,setSelectedImage]=useState<string | null | ArrayBuffer>('')

    const handleSubmit=(values)=>{
        console.log("values: ",values)
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
        initialValues:{
            content:"",
            image:""
        },
        onSubmit:handleSubmit,
        validationSchema
    })

    return(
        <div className={"space-y-5"}>
            <section>
                <h1 className={"py-5 text-xl font-bold opacity-90"}>Home</h1>
            </section>
            <section className={"pb-10"}>
                <div className={'flex space-x-5 '}>
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

                                   <label className={"flex items-center space-x-2 rounded-md cursor-pointer"}>
                                       <PhotoIcon className={"text-[blue] cursor-pointer"}/>
                                       <input type={'file'} name={'imageFile'} className={'hidden'} onChange={handleSelectImage}/>
                                   </label>

                                   <FmdGoodIcon className={"text-[blue]"}/>

                                   <TagFacesIcon className={"text-[blue]"}/>

                               </div>

                                <div>
                                    <Button
                                        sx={{width:"100%",borderRadius:"18px",py:"15px",px:"20px",bgcolor:"blue"}} variant={"contained"}
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

            <section >
                {
                    [1,1,1,1].map((_)=>
                        <PostCard/>
                    )
                }
            </section>
        </div>
    )

}

export default HomeSection;