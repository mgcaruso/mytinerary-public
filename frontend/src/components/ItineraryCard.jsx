import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Activities from '../components/Activities'
import Rating from '@mui/material/Rating';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { useDispatch, useSelector } from 'react-redux'
import itinerariesActions from '../redux/actions/itinerariesActions';
import Alert from '../components/Alert'
import { useState } from 'react'
import { Link as LinkRouter } from 'react-router-dom'
import Comment from '../components/Comment'
import { BiSend } from "react-icons/bi";
import UserIcon from '../assets/user-icon-2.png'
import InputEmoji from 'react-input-emoji'
import { WhatsappShareButton } from 'react-share'
import { FacebookShareButton } from 'react-share'
import { TwitterShareButton } from 'react-share'

import { TwitterIcon } from 'react-share'
import { WhatsappIcon } from 'react-share'
import { FacebookIcon } from 'react-share'
import { BsFillShareFill } from "react-icons/bs";
import Popper from '@mui/material/Popper'
import Box from '@mui/material/Box';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));


export default function ItineraryCard({ data, reload, setReload, cityId }) {


    console.log(data)
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    //-----handling likes----//
    const dispatch = useDispatch()

    const loggedUser = useSelector(store => store.usersReducer.loggedUser)
    const finalImage = loggedUser ? loggedUser.urlImage : UserIcon

    //-----reload---------//

    const handleReload = () => {
        setReload(!reload)
    }
    async function handleLikes() {
        await dispatch(itinerariesActions.likesDislikes(data._id))
        handleReload()
    }


    const logInToLike = () => {
        dispatch({
            type: 'MESSAGE',
            payload: {
                view: true,
                message: "Please, log in to like!",
                success: false
            }
        })
    }



    //------------add---comments---------//
    const [text, setText] = useState('')

    function handleOnEnter() {
        handleAdd()
    }
    const handleAdd = async () => {
        if (loggedUser) {
            let comments = {
                itineraryId: data._id,
                comment: text
            }
            await dispatch(itinerariesActions.addComment(comments))
            handleReload()
            setText("")

        } else {
            dispatch({
                type: 'MESSAGE',
                payload: {
                    view: true,
                    message: "Please, log in to add a comment.",
                    success: false
                }
            })
        }
    }






    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };


    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;



    return (
        <Card id="activities" sx={{ minWidth: 345, borderRadius: 0 }} className="activity-container flex px-5 card-full">
            <div className="userBox px-4 py-3">
                <Alert />

                <CardHeader
                    className=' flex flex-col justify-content-center items-center text-center'
                    avatar={
                        <Avatar className="avatar" sx={{ bgcolor: red[500], minHeight: 100, minWidth: 100 }} aria-label="recipe">
                            <img src={`${data.userImage}`} alt="user avatar" />
                        </Avatar>

                    }
                    title={data.userName}
                />
            </div>
            <div className="w-[100%] px-3">
                <CardContent>
                    <Typography variant="h5" gutterBottom component="div">
                        {data.itineraryName}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" className='text-justify'>
                        {data.description}
                    </Typography>
                    <div className="price-duration ">
                        <div className="box-1 flex flex-wrap justify-center items-center mt-2 p-3">
                            <Typography variant="body1" color="text.secondary" className="grow flex justify-center">
                                <span style={{ textDecoration: 'underline' }}>Duration</span>: <AccessTimeIcon className='mx-3' /> {data.duration} hours
                            </Typography>
                            <Typography sx={{ textDecoration: 'underline' }} variant="body1" color="text.secondary" textDecoration='underline' className="grow flex items-center justify-center p-3">
                                <span className='px-3'>Price:</span>
                                <Rating
                                    name="hover-feedback"
                                    value={data.price}
                                    precision={0.5}
                                    readOnly
                                    icon={<AttachMoneyIcon style={{ opacity: 1, color: "#222" }} fontSize="inherit" />}
                                    emptyIcon={<AttachMoneyIcon style={{ opacity: 0.5 }} fontSize="inherit" />}
                                />
                            </Typography>
                            <div className="hashtag-box flex flex-row justify-center items-center flex-wrap">
                                {data.hashtags.map((hashtag, index) => {
                                    return (
                                        <p key={index} className='px-3'> #{hashtag} </p>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                </CardContent>
                <CardActions disableSpacing>

                    {loggedUser ?
                        <>
                            <IconButton onClick={handleLikes} style={{ padding: 0, margin: 0 }} aria-label="add to favorites">
                                {/* <FavoriteIcon style={{ color: data.likes.includes(loggedUser.id) ? "darkred" : "gray", padding: 0 }} /> */}
                                <FavoriteIcon variant="contained" style={{ color: data.likes.includes(loggedUser.id) ? "darkred" : "gray", padding: 0 }} />
                            </IconButton>

                        </>
                        :
                        <span className='cursor-pointer' onClick={logInToLike} aria-label="add to favorites">
                            <FavoriteIcon style={{ color: "gray" }} />
                        </span>

                    }
                    <p className='text-sm ml-1'>{data.likes.length > 0 && data.likes.length}</p>


                    <div>

                        <BsFillShareFill onClick={handleClick} className='cursor-pointer mx-4 text-[#808080]' />
                        <Popper  id={id} open={open} anchorEl={anchorEl}>
                            <Box sx={{ border: "none", p: 1, bgcolor: 'rgba(0,0,0,0.8)', borderRadius:"5px", display: "flex" }}>
                                <WhatsappShareButton className="p-0 my-1 m-0" image={data.userImage} title={`Checkout this tinerary: "${data.itineraryName}" by ${data.userName}`} url={`https://mytinerary-caruso.vercel.app/details/${cityId}`}
                                    hashtags="itinerary">
                                    <WhatsappIcon className="h-[2rem]" round={true} />
                                </WhatsappShareButton>
                                <FacebookShareButton className="p-0 m-0 my-1"  image={data.userImage} title={`Checkout this tinerary: "${data.itineraryName}" by ${data.userName}`} url={`https://mytinerary-caruso.vercel.app/details/${cityId}`}
                                >
                                    <FacebookIcon className="h-[2rem]" round={true} />
                                </FacebookShareButton>
                                <TwitterShareButton className="p-0 m-0 my-1" image={data.userImage} title={`Checkout this tinerary: "${data.itineraryName}" by ${data.userName}`} url={`https://mytinerary-caruso.vercel.app/details/${cityId}`}
                                >
                                    <TwitterIcon className="h-[2rem]" round={true} />
                                </TwitterShareButton>
                            </Box>
                        </Popper>

                    </div>
                    <div className="box flex justify-center items-center grow">

                    </div>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent style={{ margin: 0, padding: 0 }} className="text-center">
                        <Typography variant="h5" paragraph>Activities:</Typography>

                        <Activities key={data._id} activities={data.activities} comments={data?.comments} itiId={data._id} handleReload={handleReload} />

                        <div className='comment-box bg-slate-300 min-h-[10rem] w-[100%] flex flex-col i1tems-center p-2 rounded-xl'>
                            {data.comments.length > 0 &&
                                <div>Comments ({data.comments.length})</div>
                            }
                            {data.comments.length > 0 ?

                                data.comments?.map((item, index) => {
                                    return (
                                        <Comment item={item} key={index} handleReload={handleReload} text={text} />
                                    )
                                })


                                :
                                <div>No comments yet.</div>
                            }



                            <div className="comment-box bg-slate-100 min-h-[9rem] w-full flex items-center p-3 my-2 rounded-sm">

                                {
                                    loggedUser &&
                                    <div className="avatar-user w-[7rem] m-0 flex justify-center items-center grow-0">
                                        <img src={finalImage} className="rounded-full p-0 h-[5rem]" alt="user-pic" />
                                    </div>
                                }
                                {loggedUser ?
                                    <InputEmoji
                                        value={text}
                                        onChange={setText}
                                        cleanOnEnter
                                        onEnter={handleOnEnter}
                                        placeholder={"Type a message"}
                                    />
                                    :
                                    <>
                                        <div className='grow'>
                                            <p className="text-slate-400 grow cursor-default" >Please, log in OR sign up to add a comment...</p>
                                            <LinkRouter to="/signIn">
                                                <button className='bg-transparent p-2 text-sm border border-slate-300 m-2 uppercase hover:bg-slate-400 hover:text-white'>Log In</button>
                                            </LinkRouter>
                                            <LinkRouter to="/signUp">
                                                <button className='bg-transparent p-2 text-sm border border-slate-300 m-2 uppercase hover:bg-slate-400 hover:text-white'>Sign Up</button>
                                            </LinkRouter>
                                        </div>
                                    </>

                                }
                                {loggedUser &&
                                    <button onClick={handleAdd} style={{ backgroundColor: loggedUser ? (text ? "#162E35 " : "#c0c0c0") : "#c0c0c0" }} className='text-white text-sm flex justify-center items-center bg-slate-200 px-2 rounded-md'>
                                        <span className='pr-2 py-2 '>Post</span>
                                        < BiSend className='' />
                                    </button>

                                }
                            </div>

                            <Alert />
                        </div>
                    </CardContent>
                </Collapse>
            </div>
        </Card>
    );
}