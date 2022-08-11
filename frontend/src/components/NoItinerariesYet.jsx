import React from 'react'
import Travel from '../assets/travel.gif'
import '../styles/secondary-pages.css'
import { Link as LinkRouter } from 'react-router-dom'
export default function NoItinerariesYet({ city }) {
    return (
        <div style={{ minHeight: "79.9vh" }} className="nothing-yet flex justify-center flex-col items-center w-full">
            <h2 className="nothing-yet-text text-center font-medium leading-tight text-4xl mt-0 mb-2  text-shadow-black text-[#e0e8eb]">No itineraries found yet in: <span className='text-[#]'> {city}</span></h2>
            <img src={Travel} alt="picture of a girl with a suitcase" style={{ width: "20rem", filter: " grayscale(0.8)" }} />
            <LinkRouter to="/cities"><button className="buttonFind p-4 border">Find Your Itinerary</button></LinkRouter>
        </div>
    )
}
