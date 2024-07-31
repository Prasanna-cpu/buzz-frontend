import React from 'react';
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import {useNavigate} from "react-router-dom";
import PostCard from "../PostCard/PostCard.tsx";
import {Divider} from "@mui/material";

const PostDetails : React.FC = () => {

    const navigate=useNavigate()


    const handleBack=()=>{
        navigate(-1)
    }

    return (
        <React.Fragment>
            <section className={"z-50 flex items-center sticky top-0 bg-opacity-95"}>

                <KeyboardBackspaceIcon
                    className={"cursor-pointer"}
                    onClick={handleBack}
                />
                <h1 className={"py-5 text-xl font-bold opacity-90 ml-4.5"}>
                    Post
                </h1>

            </section>


            <section>
                <PostCard/>
                <Divider/>
            </section>


            <section>
                {[1, 1, 1].map((_, index) => <PostCard key={index}/>)}

            </section>
        </React.Fragment>
    );
};

export default PostDetails;