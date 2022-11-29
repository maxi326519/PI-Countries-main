export const GET_COUNTRIES_LIST = 'GET_COUNTRIES_LIST';
export const GET_COUNTRIE = 'GET_COUNTRIE';
export const GET_DETAILS = 'GET_DETAILS';
export const ADD_ACTIVITY = 'FILTER_COUNTRIES';
export const ORDER_COUNTRIES = 'ORDER_COUNTRIES';
export const FILTER_COUNTRIES = 'FILTER_COUNTRIES';

export function getCountriesList(){
    return dispatch => {
        return fetch(`http://localhost:3001/countries`)
            .then(res => res.json())
            .then( data => {
                dispatch({
                    type: GET_COUNTRIES_LIST,
                    payload: data
                })
            })
            .catch( err => {
                console.log(err)
            });
    }
}

export function getCountrie(name){
    return dispatch => {
        return fetch(`http://localhost:3001/countries?name=${name}`)
            .then(res => res.json())
            .then( data => {
                dispatch({
                    type: GET_COUNTRIE,
                    payload: data
                })
            })
            .catch( err => {
                console.log(err)
            });
    }
}

export function getDetails(id){
    return dispatch => {
        return fetch(`http://localhost:3001/countries/${id}`)
            .then(res => res.json())
            .then( data => {
                dispatch({
                    type: GET_DETAILS,
                    payload: data
                });
            })
            .catch( err => {
                console.log(err)
            });
    } 
}

export function addActivity(data){
    return dispatch => {
        return fetch('http://localhost:3001/activities')
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: ADD_ACTIVITY,
                    payload: data
                })
            })
            .catch( err => {
                console.log(err)
            });
    }
}

export function orderCountries(order){
    return dispatch => {
        dispatch({
            type: ORDER_COUNTRIES,
            payload: order
        });
    }
}

export function filterCountries(filters){
    return dispatch => {
        dispatch({
            type: FILTER_COUNTRIES,
            payload: filters
        })
    }
}