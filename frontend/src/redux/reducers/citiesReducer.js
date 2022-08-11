const initialState = {
    cities: [], //all cities
    cityFilter: [], //filtered cities by input 
    oneCity: {}
}

const citiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CITIES':
            return {
                ...state,
                cities: action.payload,
                cityFilter: action.payload
            }
        case 'FILTER_CITIES':
            let filter = state.cities.filter((city => city.name.toLowerCase().startsWith(action.payload.toLowerCase())))
            return {
                ...state,
                cityFilter: filter
            }
        case 'GET_ONE_CITY':
            return {
                ...state,
                oneCity: action.payload
            }

        default:
            return state
    }
}

export default citiesReducer