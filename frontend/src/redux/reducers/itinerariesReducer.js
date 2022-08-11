const initialState = {
    itineraries: [],
    getOneItinerary: {},
    getItinerariesByCity: []
}

const itinerariesReducer = (state = initialState, action) => {

    switch (action.type) {
        case "GET_ITINERARIES":
            return {
                ...state,
                itineraries: action.payload
            }
        case "GET_ONE_ITINERARY":
            return {
                ...state,
                getOneItinerary: action.payload
            }
        case "GET_ITINERARIES_BY_CITY":
            return {
                ...state,
                getItinerariesByCity: action.payload
            }
        case "MESSAGE":
            return {
                ...state,
                snackbar: action.payload
            }
        default:
            return state
    }
}

export default itinerariesReducer