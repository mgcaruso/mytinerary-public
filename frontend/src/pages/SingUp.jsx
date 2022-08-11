import React from 'react'
import '../styles/signInAndUp.css'
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import CountryDropdown from 'country-dropdown-with-flags-for-react';
import PersonIcon from '@mui/icons-material/Person';
import { Link as LinkRouter } from 'react-router-dom'
import { useState } from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { FcApproval } from "react-icons/fc";
import { FcHighPriority } from "react-icons/fc";
import { motion } from "framer-motion"
import { useDispatch } from 'react-redux'
import PasswordStrengthBar from 'react-password-strength-bar';
import userActions from '../redux/actions/userActions';
import GoogleSignUp from '../components/GoogleSignUp'
import Alert from '../components/Alert'


export default function SignUp() {


    const dispatch = useDispatch()
    const blue = "#162e35"


    //Hide or show password ↓ --------------------------------//
    const [password, setPassword] = useState("")
    const [passwordRepeat, setPasswordRepeat] = useState("")
    const [showInput, setShowInput] = useState(false);
    const [showInputRepeat, setShowInputRepeat] = useState(false);
    const showPassword = () => {
        setShowInput(!showInput)
    }
    const showPasswordRepeat = () => {
        setShowInputRepeat(!showInputRepeat)
    }

    //Handling Sign Up ↓ --------------------------//

    const handleSignUp = async (e) => {
        e.preventDefault()
        if (password === passwordRepeat) {
            const userData = {
                firstName: e.target[0].value,
                lastName: e.target[1].value,
                country: country,
                urlImage: e.target[2].value,
                email: e.target[3].value,
                password: e.target[5].value,
                role: "user",
                from: "signUp",
            }

            // console.log(userData)
            dispatch(userActions.userSignUp(userData))

            // handleOpen()
        }

    }



    const [country, setCountry] = useState(null)

    return (
        <>
            <div className="body min-h-full flex items-center justify-center py-8 sm:px-6 lg:px-8">
                <motion.div animate={{ opacity: [0, 1] }} className="sign-up-card box-shadow py-7 px-5 space-y-8 rounded-lg">
                    <div>
                        <h2 className="heading mt-6 text-center text-3xl font-extrabold text-white">Welcome to our community! ✈</h2>
                        {!country &&
                                <h3 className='heading mt-6 text-center text-xl font-extrabold text-white'>Please, select your country to continue:</h3>
                        }
                    </div>
                    <div>
                        <CountryDropdown id="country" handleChange={e => setCountry(e.target.value)} className="country-dropdown-google grow w-full py-2 bg-transparent" />
                    </div>
                    {country &&

                        <>

                            <form onSubmit={(event) => handleSignUp(event)} className="mt-8 space-y-6" action="#" method="POST">
                                <div className="rounded-md ">

                                    <div className="first-last-box flex justify-between gap-4">

                                        <div className="input-box bg-[rgba(0,0,0,0)] border-bottom  pb-1 pt-2 placeholder-slate-900 focus:outline-none focus:ring-[#30545d] focus:border-slate-200 flex grow">
                                            <div className="first-name flex justify-between items-center  grow">
                                                <label htmlFor="name" className="sr-only">
                                                    First name:
                                                </label>
                                                <input
                                                    id="first-name"
                                                    name="first-name"
                                                    type="text"
                                                    autoComplete="text"

                                                    placeholder="John"
                                                    className="w-full bg-transparent"
                                                />
                                                <PersonIcon sx={{ color: blue, width: ".8em" }} />
                                            </div>
                                        </div>
                                        <div className="input-box bg-[rgba(0,0,0,0)] border-bottom  pb-1 pt-2 placeholder-slate-900 focus:outline-none focus:ring-[#30545d] focus:border-slate-200 flex grow">
                                            <div className="last-name flex justify-between items-center grow">

                                                <label htmlFor="name" className="sr-only">
                                                    Last Name:
                                                </label>
                                                <input
                                                    id="last-name"
                                                    name="last-name"
                                                    type="text"
                                                    autoComplete="text"

                                                    placeholder="Doe"
                                                    className="w-full bg-transparent"
                                                />
                                                <PersonIcon sx={{ color: blue, width: ".8em" }} />

                                            </div>

                                        </div>
                                    </div>

                                    <div className="input-box border-bottom w-full bg-[rgba(0,0,0,0)] my-2 pb-1 pt-2 placeholder-slate-900 focus:outline-none focus:ring-[#30545d] focus:border-slate-200 flex justify-between">
                                        <label htmlFor="email-address" className="sr-only">
                                            Profile picture link
                                        </label>
                                        <input
                                            id="picture-url"
                                            name="picture-url"
                                            type="picture-url"
                                            autoComplete="picture-url"

                                            placeholder="Profile picture link"
                                            className="w-full bg-transparent"
                                        />
                                        <div className="icon-box flex items-center justify-center">
                                            <InsertPhotoIcon sx={{ color: blue, width: ".8em" }} />
                                        </div>
                                    </div>
                                    <div className="input-box border-bottom w-full bg-[rgba(0,0,0,0)] my-2 pb-1 pt-2 placeholder-slate-900 focus:outline-none focus:ring-[#30545d] focus:border-slate-200 flex justify-between items-center">
                                        <label htmlFor="email-address" className="sr-only">
                                            Email address
                                        </label>
                                        <input
                                            id="email-address"
                                            name="email"
                                            type="email"

                                            autoComplete="email"
                                            placeholder="Email address"
                                            className="w-full bg-transparent"
                                        />
                                        <EmailIcon sx={{ color: blue, width: ".8em" }} />
                                    </div>


                                    <div className="input-box w-full bg-[rgba(0,0,0,0)] border-bottom pb-1 pt-2 placeholder-slate-900 focus:outline-none focus:ring-[#30545d] focus:border-slate-200 flex justify-between items-center">
                                        <label htmlFor="email-address" className="sr-only">
                                            Password
                                        </label>
                                        <input
                                            id="password"
                                            name="password"
                                            type={showInput ? 'text' : 'password'}
                                            autoComplete="password"

                                            placeholder="Password"
                                            className="w-full bg-transparent"
                                            onKeyUp={(event) => setPassword(event.target.value)}
                                        />
                                        {!password ? <KeyIcon sx={{ color: blue, width: ".8em" }} /> :

                                            <span onClick={() => showPassword()}>
                                                {showInput ? <VisibilityOffIcon sx={{ color: blue, width: ".8em", cursor: "pointer" }} /> : <RemoveRedEyeIcon sx={{ color: blue, width: ".8em", cursor: "pointer" }} />}
                                            </span>
                                        }
                                    </div>

                                    <PasswordStrengthBar password={password} scoreWords={["Too short", "Weak", "Fair", "Good", "Strong"]} />

                                    <div className="input-box w-full bg-[rgba(0,0,0,0)] border-bottom pb-1 pt-2 placeholder-slate-900 focus:outline-none focus:ring-[#30545d] focus:border-slate-200 flex justify-between items-center">
                                        <label htmlFor="email-address" className="sr-only">
                                            Repeat password
                                        </label>
                                        <input
                                            id="password-repeat"
                                            name="password-repeat"
                                            type={showInputRepeat ? 'text' : 'password'}
                                            autoComplete="password-repeat"
                                            required
                                            placeholder="Repeat password"
                                            className="w-full bg-transparent"
                                            onKeyUp={(event) => setPasswordRepeat(event.target.value)}
                                        />
                                        {!passwordRepeat ? <KeyIcon sx={{ color: blue, width: ".8em" }} /> :

                                            <span onClick={() => showPasswordRepeat()}>
                                                {showInputRepeat ? <VisibilityOffIcon sx={{ color: blue, width: ".8em", cursor: "pointer" }} /> : <RemoveRedEyeIcon sx={{ color: blue, width: ".8em", cursor: "pointer" }} />}
                                            </span>
                                        }
                                    </div>

                                    {!passwordRepeat ? <p className="h-6"></p> :
                                        password === passwordRepeat ? <p className="text-green-700 flex items-center mb-3"> <span className='mx-2'><FcApproval /></span> Good to go!</p> :
                                            <p className="text-red-700 flex items-center mb-3"> <span className='mx-2'><FcHighPriority /></span> Passwords need to match.</p>
                                    }

                                </div>
                                <div className="button-submit-box">
                                    <button value="submit" type="submit" className="button-submit-box btn2 btn btn-5 hover-border-11 sign-in-btn">
                                        <span>Sign Up</span>
                                    </button>

                                </div>

                            </form>
                            <div className="remember-me flex items-center justify-between flex-col ">

                                <div className="google-facebook w-[100%] flex flex-wrap justify-center gap-4 p-0 m-0">


                                    {/* <button onClick={handleOpenGoogle} className='text-sm px-2 py-3 bg-transparent border-slate-800 grow flex justify-center items-center bg-[#f1f1f1]  shadow-btn my-1 mb-2'>
                                <span className='mx-2'>Sign Up </span>
                                <img style={{ height: "1.3rem" }} src={GoogleIcon} alt="Sign up with google" />
                            </button> */}
                                    <GoogleSignUp country={country} />

                                    {/* <button className='text-sm px-2 py-3 bg-transparent  border-slate-800 grow flex justify-center items-center bg-[#f1f1f1]  shadow-btn my-1 mb-2'>
                                <span className='mx-2'>Sign Up </span>
                                <img style={{ height: "1.3rem" }} src={FacebookIcon} alt="Sign up with facebook" />
                            </button> */}
                                </div>
                                <p className='text-sm'>Already have an account?</p>
                                <p style={{ color: blue }} className="font-bold">Sign in <LinkRouter to="/signIn"><span className='underline'>here</span></LinkRouter>!</p>

                                <Alert />
                            </div>
                        </>
                    }


                </motion.div>
            </div>
        </>
    )
}
