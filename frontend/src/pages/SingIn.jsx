import React from 'react';
import '../styles/signInAndUp.css'
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import { motion } from "framer-motion"
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import userActions from '../redux/actions/userActions';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import GoogleSignIn from '../components/GoogleSignIn'
import { Link as LinkRouter } from 'react-router-dom'
import Alert from '../components/Alert'


export default function SignIn() {
    const dispatch = useDispatch()

    const handleSignIn = async (e) => {
        e.preventDefault()
        const loggedUser = {
            email: e.target[0].value,
            password: e.target[1].value,
            from: "signIn",
        }
        dispatch(userActions.userSignIn(loggedUser))
    }



    //SNACKBAR WELCOME BACK ↓↓

    const [password, setPassword] = useState("")
    const [showInput, setShowInput] = useState(false);
    const showPassword = () => {
        setShowInput(!showInput)
    }



    const blue = "#162e35"
    return (
        <>
            <div className="body min-h-full flex items-center justify-center py-3 sm:px-6 lg:px-8">
                <motion.div animate={{ opacity: [0, 1] }} className="sign-in-card box-shadow py-5 px-8 max-w-lg space-y-5 rounded-lg">
                    <h2 className="heading mt-1 text-center text-3xl font-extrabold text-white">Sign in to your account</h2>
                    <div className='login-box'>
                        <p className="text-sm text-center">Log in using Social Networks:</p>
                        <div className="btn-box flex flex-wrap justify-center w-full my-0 flex-col items-center">
                            <GoogleSignIn />

                            {/* <button className="sub-btn flex"><img className="w-[1.5rem]" src={FacebookIcon} alt="facebook icon" /></button> */}
                        </div>
                    </div>


                    <div className="line-box flex items-center">
                        <div style={{ width: "45%", height: "1px" }} className="line"></div>
                        <p className='mx-1'>or</p>
                        <div style={{ width: "45%", height: "1px" }} className="line"></div>
                    </div>

                    <form onSubmit={handleSignIn} className="form" action="#" method="POST">
                        <div className="rounded-md ">
                            <div className="input-box w-full bg-[rgba(0,0,0,0)] border-b-2 border-[#30545d] placeholder-slate-900 focus:outline-none focus:ring-[#30545d] focus:border-slate-200 flex justify-between items-center">
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    placeholder="Email address"
                                    className="w-full bg-transparent input"
                                />
                                <EmailIcon sx={{ color: blue, width: ".8em" }} />
                            </div>
                            <div className="input-box w-full bg-[rgba(0,0,0,0)] border-b-2 border-[#30545d] placeholder-slate-900 focus:outline-none focus:ring-[#30545d] focus:border-slate-200 flex justify-between mb-4 items-center">
                                <label htmlFor="email-address" className="sr-only">
                                    Password
                                </label>
                                <input
                                    onKeyUp={(e) => setPassword(e.target.value)}
                                    id="password"
                                    name="password"
                                    type={showInput ? 'text' : 'password'}
                                    autoComplete="password"
                                    required
                                    placeholder="Password"
                                    className="w-full bg-transparent input"
                                />
                                {!password ? <KeyIcon sx={{ color: blue, width: ".8em" }} /> :

                                    <span onClick={() => showPassword()}>
                                        {showInput ? <VisibilityOffIcon sx={{ color: blue, width: ".8em", cursor: "pointer" }} /> : <RemoveRedEyeIcon sx={{ color: blue, width: ".8em", cursor: "pointer" }} />}
                                    </span>
                                }
                            </div>
                        </div>

                        <div className="remember-me flex items-center justify-between flex-col pt-2">
                            <button type="submit" value="submit" className="btn btn2 btn-5 hover-border-11 sign-in-btn">
                                <span className='btn2'>Sign In</span>
                            </button>
                            <div className='flex flex-wrap justify-center items-center'>
                            <p className='text-sm mr-2'>Not registered yet?</p>
                                <p style={{ color: blue }} className="font-bold">Create an account <LinkRouter to="/signUp"><span className='underline'>here</span></LinkRouter>!</p>
                            </div>
                        </div>
                    </form>
                    <Alert />
                </motion.div>
            </div>
        </>
    )
}

