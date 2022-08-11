import React from 'react'
import '../styles/secondary-pages.css'
import Error from '../assets/404.png'
import CustomHeading from '../components/CustomHeading'


export default function NotFound() {
  return (
    <div className="body not-found-body">
        <img style={{height: "20rem"}} src={Error} alt="not found picture" />
        <CustomHeading text = {"Page Not Found"} />
    </div>
  )
}
