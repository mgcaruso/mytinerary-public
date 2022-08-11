import React from 'react'
import Carousel from 'react-grid-carousel'
import CustomHeading from './CustomHeading'
import '../styles/carousel.css'
import { useEffect } from 'react'



import { connect } from 'react-redux'
import citiesActions from '../redux/actions/citiesActions'


const Slides = (props) => {

    useEffect(() => {

        props.getCities()
    }, []);

    return (
        <div id="carousel" className="carousel-box">
            <h2 className="heading py-2 text-center text-3xl font-extrabold text-white">Popular MyTineraries</h2>
            <Carousel cols={2} rows={2} gap={40} loop autoplay={2000}
                scroll-snap={true}
                showDots
                mobileBreakpoint={200}
                responsiveLayout={[
                    {
                        breakpoint: 576,
                        cols: 1,
                        rows: 4,
                        gap: 5
                    },
                    {
                        breakpoint: 768,
                        cols: 2,
                        rows: 2,
                        gap: 5
                    },
                    {
                        breakpoint: 992,
                        cols: 2,
                        rows: 2,
                        gap: 5
                    },
                    {
                        breakpoint: 1200,
                        cols: 2,
                        rows: 2,
                        gap: 10
                    },
                    {
                        breakpoint: 1400,
                        cols: 2,
                        rows: 2,
                        gap: 15,
                    }
                ]}
            >
                {props.cities.map((city) => {
                    return (
                        <Carousel.Item key={city._id}>
                            <div className="container">
                                <img className="image-carousel" height="100%" width="100%" src={city.picture} alt={city.name} />
                                <div className="centered flex flex-col">
                                    <h4>{city.name}</h4>
                                    <h6 className='text-lg'>{city.country}</h6>
                                </div>
                            </div>
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        </div >
    )
}

const mapDispatchToProps = {
    getCities: citiesActions.getCities
}

const mapStateToProps = (state) => {
    return {
        cities: state.citiesReducer.cities
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Slides)
