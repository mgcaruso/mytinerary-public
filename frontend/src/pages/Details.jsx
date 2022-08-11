import React from 'react'
import { useParams } from 'react-router-dom'
import { motion } from "framer-motion"
import { Link as LinkRouter } from 'react-router-dom'
import '../styles/secondary-pages.css'
import ButtonEffect from '../components/ButtonEffect'
import { useRef } from 'react'
import { useEffect } from 'react'
import ItineraryCard from '../components/ItineraryCard'
import NoItinerariesYet from '../components/NoItinerariesYet'
import citiesActions from '../redux/actions/citiesActions'
import itinerariesActions from '../redux/actions/itinerariesActions'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'


function Details() {

    const { id } = useParams();

    const itineraries = useRef(null);
    const scrollIntoViewOptions = { behavior: "smooth" }
    const scrollToElement = () => itineraries.current.scrollIntoView(scrollIntoViewOptions);

    const dispatch = useDispatch()
    const [ cityId, setCityId] = React.useState(false)
    const [reload, setReload] = React.useState(false)
    useEffect(() => {
        dispatch(citiesActions.getOneCity(id))
        setCityId(id)
    }, []);

    const [ iti, setIti ] = useState([])
    useEffect(() => {
        dispatch(itinerariesActions.getItinerariesByCity(id))
        .then( res => setIti(res.data.res) )
    }, [reload])
    
    const city = useSelector(store => store.citiesReducer.oneCity)
    return (
        <div className="body cities-body flex flex-col">

            <motion.div
                transition={{ opacity: [0, 1] }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                key={city._id}
                style={{ backgroundImage: `url(${city.picture})`, minHeight: "90vh", padding: "30px 0px" }} className="details-body w-full flex flex-col justify-center items-center back">
                <LinkRouter to="/cities" className='self-start justify-self-start pb-2'>
                    <ButtonEffect />
                </LinkRouter>
                <div className="w-[90%] card-text dropshadow-4 light-theme mb-5">
                    <div className="px-6 py-4">
                        <motion.h2 className="blue-text title-details text-5xl text-[#274a54] text-center mb-2 py-4" animate={{ opacity: [0, 1] }} transition={{ opacity: [0, 1] }}>{city.name}</motion.h2>
                        <motion.p className="blue-text p-details text-justify" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>{city.description}</motion.p>
                    </div>
                    <div className="px-6 pb-2 text-center">
                        {
                            city.hashtags?.map((hashtag, index) => {
                                return (
                                    <span key={index} className="inline-block bg-[rgba(255,255,255,0.6)] rounded-full px-3 text-sm font-semibold mr-2 mb-2 blue-text">{hashtag}</span>
                                )
                            })
                        }
                    </div>
                </div>
                <button onClick={scrollToElement} className="bg-transparent">
                    <motion.svg
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2 }}
                        xmlns="http://www.w3.org/2000/svg"
                        className="arrow-down h-9 w-9 text-slate-100 text-shadow-black"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
                    </motion.svg>
                </button>
            </motion.div>
            <div id="itineraries" ref={itineraries} className="box w-full">
                {iti.length > 0 ? iti?.map((itinerary, index) => {
                    return (
                        <ItineraryCard cityId={cityId} key={index} data={itinerary} reload={reload} setReload={setReload} />
                    )
                }) : <NoItinerariesYet city={city.name} />}

            </div>


        </div>
    )
}


export default Details