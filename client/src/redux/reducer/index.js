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
    activities: {
        message: null,
        error: null
    }
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
            if(action.payload.hasOwnProperty('message')){
                return {
                    ...state,
                    activities: {
                        message: action.payload.message,
                        error: null
                    }
                }
            }else{
                return {
                    ...state,
                    activities: {
                        message: null,
                        error: action.payload.error
                    }
                }
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
            console.log(action.payload);
            return {
                ...state,
                list: {
                    data: state.list.data.filter( c =>{
                        if(c.continent.includes('America')) return action.payload.america
                        if(c.continent === 'Europe') return action.payload.europe
                        if(c.continent === 'Asia') return action.payload.asia
                        if(c.continent === 'Africa') return action.payload.africa
                        if(c.continent === 'Antarctica') return action.payload.antarctica
                        return false;
                    }),
                    error: {}
                }
            }
        
        case CLEAR_ERRORS:
            console.log('clear errors');
            return{
                ...state,
                list: {
                    ...state.list,
                    error: {}
                },
                activities: {
                    message: null,
                    error: null
                }
            }
        default:
            return { ...state }
    }
}