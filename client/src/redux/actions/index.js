const GET_COUNTRIES_LIST = 'GET_COUNTRIES_LIST';
const GET_COUNTRIE = 'GET_COUNTRIE';
const GET_DETAILS = 'GET_DETAILS';
const ADD_ACTIVITY = 'FILTER_COUNTRIES';
const ORDER_COUNTRIES = 'ORDER_COUNTRIES';
const FILTER_COUNTRIES = 'FILTER_COUNTRIES';

function getCountriesList(){
    return dispatch => {
        fetch(`http://localhost:3001/countries`)
        .then(d => d.json())
        .then( data => {
            dispatch({
                type: GET_COUNTRIES_LIST,
                payload: data
            })
        })
    }
}

function getCountrie(name){
    return dispatch => {
        fetch(`http://localhost:3001/countries?name=${name}`)
        .then(d => d.json())
        .then( data => {
            dispatch({
                type: GET_COUNTRIE,
                payload: data
            })
        })
    }
}

function getDetails(id){
    return dispatch => {
        fetch(`http://localhost:3001/countries/${id}`)
        .then(d => d.json())
        .then( data => {
            dispatch({
                type: GET_DETAILS,
                payload: data
            });
        })
    }
}

function addActivity(data){
    return dispatch => {
        fetch('http://localhost:3001/activities')
        .then(d => d.json())
        .then(data => {
            dispatch({
                type: ADD_ACTIVITY,
                payload: data
            })
        })
    }
}

function orderCountries(order){
    return dispatch => {
        dispatch({
            type: ORDER_COUNTRIES,
            payload: order
        });
    }
}

function filterCountries(data){
    return dispatch => {
        dispatch({
            type: FILTER_COUNTRIES,
            payload: data
        })
    }
}

module.exports = {
    getCountriesList,
    getCountrie,
    getDetails,
    addActivity,
    filterCountries,
    orderCountries
}