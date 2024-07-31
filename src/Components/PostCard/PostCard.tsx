import React, { useState } from 'react';
import RepeatIcon from '@mui/icons-material/Repeat';
import { useNavigate } from 'react-router-dom';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import BarChartIcon from '@mui/icons-material/BarChart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ReplyModal from '../ReplyModal/ReplyModal.tsx';
import { Avatar, Button, Menu, MenuItem } from '@mui/material';

const PostCard: React.FC = () => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [openReplyModel, setOpenReplyModal] = useState(false);

    function handleOpenReplyModal() {
        setOpenReplyModal(true);
    }

    function handleCloseReplyModal() {
        setOpenReplyModal(false);
    }

    function handleClose() {
        setAnchorEl(null);
    }

    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    function handleDeletePost() {
        console.log('deletePost');
        handleClose();
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    function handleModifyPost() {
        console.log('Modify Post');
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    function handleCreateRepost() {
        console.log('Create Repost');
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    function handleLikePost() {
        console.log('Handle Like Posts');
    }

    return (
        <React.Fragment>
            <div className={'flex space-x-5'}>
                <Avatar
                    src={''}
                    onClick={() => navigate(`/profile/${8}`)}
                    className={'cursor-pointer'}
                    alt={'username'}
                />
                <div className={'w-full'}>
                    <div className={'flex justify-between items-center'}>
                        <div className={'flex cursor-pointer items-center space-x-3 '}>
                            <span className={'font-semibold'}>Kumar</span>
                            <span className={'text-gray-600'}>@kumar227</span>
                            <p className={'text-gray-300 text-sm'}>Verified</p>
                        </div>

                        <div>
                            <Button
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                <MoreHorizIcon />
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
                                <MenuItem onClick={handleDeletePost}>Delete</MenuItem>
                                <MenuItem onClick={handleModifyPost}>Edit</MenuItem>
                            </Menu>
                        </div>
                    </div>
                    <div className={'mt-2'}>
                        <div className={'cursor-pointer'}>
                            <p className={'mb-1.5 p-0'}>How's the day</p>
                            <img
                                src={''}
                                className={'w-[28rem] border border-gray-400 p-5 rounded-md border-none'}
                                alt={'Post Image'}
                            />
                        </div>
                        <div className={'py-5 flex flex-wrap justify-evenly items-center'}>
                            <div className={'space-x-3 flex items-center text-gray-600'}>
                                <ChatBubbleOutlineIcon className={'cursor-pointer'} onClick={handleOpenReplyModal} />
                                <p>50</p>
                            </div>
                            <div className={`${true ? 'text-pink-500' : 'text-gray-500'} space-x-3 flex items-center`}>
                                <RepeatIcon className={'cursor-pointer'} onClick={handleCreateRepost} />
                                <p>22</p>
                            </div>
                            <div className={`${true ? 'text-pink-500' : 'text-gray-500'} space-x-3 flex items-center`}>
                                {true ? (
                                    <FavoriteIcon onClick={handleLikePost} className={'cursor-pointer'} />
                                ) : (
                                    <FavoriteBorderIcon onClick={handleLikePost} className={'cursor-pointer'} />
                                )}
                                <p>22</p>
                            </div>
                            <div className={'space-x-3 flex items-center text-gray-600'}>
                                <BarChartIcon className={'cursor-pointer'} />
                                <p>20K</p>
                            </div>
                            <div className={'space-x-3 flex items-center text-gray-600'}>
                                <FileUploadIcon className={'cursor-pointer'} />
                                <p>20K</p>
                            </div>
                        </div>
                    </div>

                    <section>
                        <ReplyModal open={openReplyModel} handleClose={handleCloseReplyModal} />
                    </section>
                </div>
            </div>
        </React.Fragment>
    );
};

export default PostCard;
