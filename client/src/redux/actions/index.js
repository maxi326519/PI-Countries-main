export const GET_COUNTRIES_LIST = 'GET_COUNTRIES_LIST';
export const GET_COUNTRIE_BY_NAME = 'GET_COUNTRIE_BY_NAME';
export const GET_DETAILS = 'GET_DETAILS';
export const ADD_ACTIVITY = 'FILTER_COUNTRIES';
export const ORDER_COUNTRIES = 'ORDER_COUNTRIES';
export const FILTER_COUNTRIES = 'FILTER_COUNTRIES';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

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

export function getCountrieByName(name){
    return dispatch => {
        return fetch(`http://localhost:3001/countries?name=${name}`)
            .then(res => res.json())
            .then( data => {
                dispatch({
                    type: GET_COUNTRIE_BY_NAME,
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

export function filterCountries(filter){
    console.log(filter);
    return dispatch => {
        return fetch(`http://localhost:3001/countries`, {
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                method: "GET",
                body: JSON.stringify({ ...filter })
            })
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: FILTER_COUNTRIES,
                    payload: data
                })
            })
            .catch( err => {
                console.log(err)
            });
    }
}

export function clearErrors(){
    return dispatch => {
        dispatch({
            type: CLEAR_ERRORS
        })
    }
}