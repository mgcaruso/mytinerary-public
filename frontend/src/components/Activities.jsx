import { Typography } from '@mui/material'
import React from 'react'
import '../styles/secondary-pages.css'
import '../styles/activities.css'
import { useState, useEffect } from 'react'
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';



export default function Activities({ activities }) {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (activities) {
            setLoading(false)
        }
    }, [])

    return (
        <div className="flex flex-wrap justify-evenly items-center">
            {activities?.map((activity, index) => {
                return (
                    <div key={index}>
                        {
                            loading ?
                                <Box key={index} sx={{ margin: ".2rem", borderRadius: "10px" }}>
                                    <Skeleton spacing={2} variant="rectangular" animation="wave" height={"12rem"} width={"22rem"} />
                                </Box>

                                :
                                <div className="flip-card flex flex-wrap m-3 ">
                                    <div className="flip-card-inner">
                                        <div
                                            className="flip-card-front details-body activity-img rounded-lg box-shadow flex flex-col justify-end items-center" style={{ height: "12rem", width: "22rem", backgroundImage: `url(${activity.picture})` }} >
                                            <h4 className='h-act-card text-center text-slate-100 bold text-xl bg-[rgba(0,0,0,0.3)] w-full py-2'>{activity.name}</h4>
                                        </div>
                                        <div className="flip-card-back flex background-config justify-center items-center" style={{ height: "12rem", width: "22rem", backgroundImage: `url(${activity.picture})` }}>
                                            <div className="back-box flex grow justify-center items-center h-full text-center bg-[rgba(0,0,0,0.6)]">
                                                <Typography className="p-3 text-center h-act-card text-back" variant="body1" color="white" paragraph>{activity.description}</Typography>
                                            </div>
                                        </div>
                                    </div>
                                </div>}
                    </div>
                )
            })}
            
        </div >
    )
}
