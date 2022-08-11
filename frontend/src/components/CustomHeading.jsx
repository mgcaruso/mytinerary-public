import React from 'react'

export default function CustomHeading({ text, color, height }) {
    return (
        <h3 style={{fontFamily: `'Jura', sans-serif`, fontWeight: "bold" , textAlign: "center", height: {height}, color: {color}}} className="color- font-medium leading-tight text-3xl mt-0 mb-2 text-white"> {text}</h3>
    )
}
