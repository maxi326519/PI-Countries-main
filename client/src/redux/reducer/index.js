import {
    GET_COUNTRIE,
    GET_DETAILS,
    ADD_ACTIVITY,
    ORDER_COUNTRIES,
    FILTER_COUNTRIES,
    GET_COUNTRIES_LIST
} from '../actions';

const initialState = {
    list: [],
    countries: [],
    details: [],
    filter: [],
    activities: []
}

export default function rootReducer(state = initialState, action){

    switch(action.type){
        case GET_COUNTRIES_LIST:
            return {
                ...state,
                list: action.payload
            }   

        case GET_COUNTRIE:
            return {
                ...state,
                countries: [ ...action.payload ]
            }

        case GET_DETAILS:
            return {
                ...state,
                details: action.payload
            }

        case ADD_ACTIVITY:
            return {
                ...state,
                activities: [ ...state.activities, action.payload ]
            }

        case ORDER_COUNTRIES:
            return {
                ...state,
                /* HACER PRUEBAS */
            }

        case FILTER_COUNTRIES:
            return {
                ...state,
                /* REVISAR QUE TIPO DE FILTRADOS REALIZAR */
            }
        
        default:
            return { ...state }
    }
}