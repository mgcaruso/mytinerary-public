import axios from 'axios'
import urlBack from '../../urlBack'

const citiesActions = {
    getCities: ()=>{
        return async(dispatch, getState) => {
            const res = await axios.get(`${urlBack}/api/cities`)
            dispatch({type: 'GET_CITIES', payload:res.data.response.cities})
        }
    },
    filterCities: (input)=> {
        return (dispatch, getState) => {
            dispatch({type: 'FILTER_CITIES', payload: input })
        }
    }, 
    getOneCity: (id)=> {
        return async(dispatch, getState) => {
            const res = await axios.get(`${urlBack}/api/cities/${id}`)
            // console.log(res)
            dispatch({type: 'GET_ONE_CITY', payload: res.data.response})
        }
    },
}

export default citiesActions 