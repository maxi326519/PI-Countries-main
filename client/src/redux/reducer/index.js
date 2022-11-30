import { bindActionCreators } from 'redux';
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
    filters: {},
    activities: []
}

export default function rootReducer(state = initialState, action){

    switch(action.type){
        case GET_COUNTRIES_LIST:
            return {
                ...state,
                list: action.payload.sort((a, b) =>{
                    if (a.name > b.name) {
                        return 1;
                      }
                      if (a.name < b.name) {
                        return -1;
                      }
                      return 0;
                })
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
                list: [ ...state.list.reverse() ]
            }

        case FILTER_COUNTRIES:
            return {
                ...state,
                filters: action.payload
            }
        
        default:
            return { ...state }
    }
}