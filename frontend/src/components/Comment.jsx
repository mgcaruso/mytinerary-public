import React from 'react'
import { useSelector } from 'react-redux';
import itinerariesActions from '../redux/actions/itinerariesActions';
import { useDispatch } from 'react-redux'
import UserIcon from '../assets/user-icon-2.png'
import { motion} from 'framer-motion'

export default function Comment({ text, item, index, handleReload }) {
    const loggedUser = useSelector(store => store.usersReducer.loggedUser)

    const [edit, setEdit] = React.useState(item.comment)
    const [bgColor, setbgColor] = React.useState("transparent");
    const dispatch = useDispatch()

    async function handleEdit() {

        if(editable){
            await dispatch(itinerariesActions.editComment({
                comment: {
                    commentId: item._id,
                    comment: edit
                }
            }))
            setbgColor("transparent")
            handleReload()
            setEditable(false)
        }else{
            setEditable(!editable)
            setbgColor("white")
        }
    }

    const handleDelete = async (e) => {
        await dispatch(itinerariesActions.deleteComment(e.target.id))
        handleReload()
    }

    const finalImage =  item.userId.urlImage || UserIcon
    const [editable, setEditable] = React.useState(false)

    return (
        <motion.div animate={{ opacity: [0, 1] }} transition={{ opacity: [0, 1] }} key={index} className='comment-box bg-slate-100 min-h-[9rem] w-full flex  my-1  items-center rounded-sm p-2'>
            <img src={finalImage} className="rounded-full h-[3.8rem] grow-0" alt="user-pic" />
            <div className="upper-div flex justify-center items-start flex-col grow ml-1">
                <div className="user-info-box grow flex px-2 justify-start items-start mb-1">
                    <p className='text-start font-bold px-1'>{item.userId.firstName}</p>
                    <span className='text-center text-sm px-1'>•</span>
                    <span className="text-sm px-1 text-slate-400"> {new Date(item.date).toUTCString().split("G")[0].trim()} </span>
                </div>

                <div id={index} type="text" style={{ backgroundColor: bgColor }} className="rounded-md p-2 comment-itself grow text-justify flex px-3 w-full cursor-default" onInput={(event) => setEdit(event.currentTarget.textContent)} contentEditable={editable}  suppressContentEditableWarning={true} >
                    {item.comment}
                </div>
                {item.userId._id === loggedUser?.id &&
                    <div className='w-full'>
                        <div className='mx-3 my-2 w-[98%] bg-slate-300 h-[1px]'></div>
                        <div className="admin-options flex justify-start items-start mx-2">
                            <span id={item._id} style={{color: editable ? "green" : "black"}} onClick={(edit) => handleEdit(edit)} className='text-md px-1 font-bold cursor-pointer' >{editable ? "Done" : "Edit"}</span>
                            <span className='text-center text-sm px-1'>•</span>
                            <span id={item._id} onClick={handleDelete} className='text-md px-1 font-bold cursor-pointer hover:text-red-600'>Delete</span>

                        </div>
                    </div>
                }
            </div>

        </motion.div>
    )
}
