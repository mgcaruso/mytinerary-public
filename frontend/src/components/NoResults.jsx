import React from 'react'
import image from '../assets/construction.png'

export default function NoResults() {

    return (
        <div className='flex flex-col p-5 m-3'>
            <img alt="no results" style={{width: "200px"}} src={image} />
            <h3 style={{fontFamily: `'Jura', sans-serif`, fontWeight: "bold" , textAlign: "center", color: "#000"}} className="text-[#0f1c20] font-medium leading-tight text-3xl mt-0 mb-2 text-white">No results found</h3>
        </div>
    )
}
