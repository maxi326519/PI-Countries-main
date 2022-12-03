import { bindActionCreators } from 'redux';
import {
    GET_COUNTRIE_BY_NAME,
    GET_DETAILS,
    ADD_ACTIVITY,
    ORDER_COUNTRIES,
    FILTER_COUNTRIES,
    GET_COUNTRIES_LIST,
    CLEAR_ERRORS
} from '../actions';

const initialState = {
    list: {
        data: [],
        error: {}
    },
    details: [],
    filters: {},
    activities: []
}

export default function rootReducer(state = initialState, action){

    switch(action.type){
        case GET_COUNTRIES_LIST:
            return {
                ...state,
                list: {
                    data: action.payload.sort((a, b) =>{
                        if (a.name > b.name) {
                            return 1;
                          }
                          if (a.name < b.name) {
                            return -1;
                          }
                          return 0;
                    }),
                    error: {}
                }
            }   

        case GET_COUNTRIE_BY_NAME:

            if(Array.isArray(action.payload)){
                return {
                    ...state,
                    list: {
                        data: [ ...action.payload ],
                        error: {}
                    }
                }
            }else{
                return {
                    ...state,
                    list: {
                        data: state.list.data,
                        error: {
                            message: action.payload.error
                        }
                    }
                }
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
                list: {
                    ...state.list,
                    data: [ ...state.list.data.reverse() ]
                }
            }

        case FILTER_COUNTRIES:
            return {
                ...state,
                filters: action.payload
            }
        
        case CLEAR_ERRORS:
            console.log('clear errors');
            return{
                ...state,
                list: {
                    ...state.list,
                    error: {}
                }
            }
        default:
            return { ...state }
    }
}