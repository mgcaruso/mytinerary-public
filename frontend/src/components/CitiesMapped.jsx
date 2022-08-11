import React from 'react'
import { motion } from 'framer-motion'
import { Link as LinkRouter } from 'react-router-dom'

export default function CitiesMapped({ filtered }) {

    return (

        <div className="cities-container">
            <div
                className='body flex flex-row gap-5 justify-evenly flex-wrap'>
                {filtered && filtered.map((item) => 
                    <motion.div
                        key={item._id}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ backgroundColor: "#fff" }}
                        animate={{ opacity: [0, 1] }}
                        transition={{ opacity: [0, 1] }}
                        className="card-box max-w-sm rounded my-4 mx-2 overflow-hidden shadow-lg bg-[rgba(255,255,255,0.7)]">

                        <img className="w-[380px] h-[250px] object-cover" src={item.picture} alt="Sunset in the mountains" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{item.name}</div>
                            <h4 className="text-gray-700 text-base">{item.country}</h4>
                        </div>
                        <LinkRouter to={`/details/${item._id}`}>
                            <button className="menu-item my-1">See Details</button>
                        </LinkRouter>
                        <div className="px-6 pt-4 pb-2">
                            {
                                item.hashtags?.map((hashtag) => {
                                    return (

                                        <span key={hashtag} className="inline-block bg-gray-200 rounded-full px-3 text-sm font-semibold text-gray-700 mr-2 mb-2">{hashtag}</span>
                                    )
                                })
                            }
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    )
}
