import React from "react";
import '../styles/welcome.css'
import { Link as LinkRouter } from 'react-router-dom'
import { HashLink } from "react-router-hash-link";
import { motion } from "framer-motion"
export default function Welcome(){


    return (
        <div id="welcome" className="welcome-box">
            <motion.h1
                transition={{ duration: 2 }}
                initial={{ y: -500, x: 0, color: "#cbd5e1" }}
                animate={{ y: 0, x: 0, color: "#0c252c" }}

                className="text-6xl text-slate-100">
                <motion.span
                    initial={{ y: 0, x: -500, color: "#cbd5e1" }}
                    animate={{ color: "#cbd5e1" }}
                    className="lg:text-6xl sm:text-5xl md:text-6xl">MY</motion.span>Tinerary

            </motion.h1>


            <motion.h4
                transition={{ duration: 2 }}
                initial={{ y: 0, x: 1000 }}
                animate={{ y: 0, x: 0 }}
                className="subtitle text-4xl text-white subtitle sm:text-2xl">Find your perfect trip, designed by insiders who know and love their cities!</motion.h4>


            <LinkRouter className="link-btn" to="/cities">

                <motion.button
                    transition={{ duration: 1.5, delay: 1 }}
                    animate={{
                        
                        scale: [1, 2, 2, 1],
                        opacity: [0, 0, 1, 1],
                        rotate: [0, 360, 360, 0],
                        color: ["#fff", "#0c252c", "#0c252c", "#fff"],
                        backgroundColor: ["#0c252c", "#cbd5e1", "#cbd5e1", "#0c252c"],
                        boxShadow: ["7px 7px 7px rgba(203, 213, 225, 0.6)", "0px 0px 0px rgba(0,0,0, 0)", "7px 7px 7px rgba(203, 213, 225, 0.6)" ]
                    }}

                    className="btn-welcome bg-blue-400 text-white font-bold py-3 px-5 mt-3 rounded-full drop-shadow-xl">
                    Popular Cities
                </motion.button>
            </LinkRouter>


            <HashLink to="/#carousel" smooth="true" offset={70} duration={1000}>
                <motion.svg 
                animate={{ rotate: 360 }}
                transition={{ duration: 2 }}
                xmlns="http://www.w3.org/2000/svg" 
                className="arrow-down h-9 w-9 text-slate-100" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
                </motion.svg>
            </HashLink>
        </div>
    )
}



