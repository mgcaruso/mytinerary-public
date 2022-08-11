import axios from 'axios'
import urlBack from '../../urlBack'

const itinerariesActions = {
    getItineraries: ()=>{
        return async(dispatch, getState) => {
            const res = await axios.get(`${urlBack}/api/itineraries`)
            dispatch({type: 'GET_ITINERARIES', payload:res.data.itineraries})
        }
    }, 
    getOneItinerary: (id)=> {
        return async(dispatch, getState) => {
            const res = await axios.get(`${urlBack}/api/itineraries/${id}`)
            dispatch({type: 'GET_ONE_ITINERARY', payload: res.data.response})
        }
    },
    getItinerariesByCity: (id) => { 
        return async(dispatch, getState) => {
            const res = await axios.get(`${urlBack}/api/itineraryByCity/${id}`)
            dispatch({type: 'GET_ITINERARIES_BY_CITY', payload: res.data.res}) 
            return res
        }    
    },
    likesDislikes: (itineraryId) => {
        const token = localStorage.getItem('token')
        return async(dispatch, getState) => {
            try{
                const res = await axios.put(`${urlBack}/api/itineraries/likes/${itineraryId}`, {}, {
                    headers: {Authorization: 'Bearer ' + token}
                })
                // console.log(res)
                dispatch({
                    type: 'MESSAGE',
                    payload: {
                        view: true,
                        message: res.data.message,
                        success: true,
                    }
                })
                return res
            }catch(err){
                console.log(err)
            }

        }
    },
    addComment: (comment) => {
        const token = localStorage.getItem('token')
        return async (dispatch, getState) => {

            if (comment.comment !== "") {
                const res = await axios.post(`${urlBack}/api/comments`, { comment }, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
                dispatch({
                    type: 'MESSAGE',
                    payload: {
                        view: true,
                        message: res.data.message,
                        success: res.data.success
                    }
                })
                return res
            }
            else {
                dispatch({
                    type: 'MESSAGE',
                    payload: {
                        view: true,
                        message: "Enter a message to enter a comment.",
                        success: false
                    }
                })
            }
        }
    },
    editComment: (comment) => {

        const token = localStorage.getItem('token')
        return async (dispatch, getState) => {
            const res = await axios.put(`${urlBack}/api/comments`, { ...comment }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            dispatch({
                type: 'MESSAGE',
                payload: {
                    view: true,
                    message: res.data.message,
                    success: res.data.success
                }
            })

            return res
        }
    },
    deleteComment: (id) => {
        const token = localStorage.getItem('token')
        return async (dispatch, getState) => {
            const res = await axios.post(`${urlBack}/api/comments/${id}`, {}, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }

            })
            dispatch({
                type: 'MESSAGE',
                payload: {
                    view: true,
                    message: res.data.message,
                    success: res.data.success
                }
            })
            return res
        }
    },
}

export default itinerariesActions 