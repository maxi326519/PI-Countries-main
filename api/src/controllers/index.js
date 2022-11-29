const axios = require('axios');
const fs = require('fs');
/*
    getCountriesList
    getDetails
    getCountrie
    addActivity
    api: https://restcountries.com/v3/all
*/

function readData(){
    return JSON.parse(fs.readFileSync('data.json', 'utf-8'));
}

function readActivity(){
    return JSON.parse(fs.readFileSync('activity.json', 'utf-8'));
}

function writeActivity(data){
    return JSON.parse(fs.writeFileSync(data, 'utf-8'));
}

async function getData(){
    let data;
    let error;
    let procesedData = [];

    /* PRODUCTION */
    /*     
    await axios.get('https://restcountries.com/v3/all')
    .then( d => data = d.data )
    .catch( e => err = e);

    if(error) throw new Error(error);
    */

    /* DEVELOPMENT */
    data = readData();

    return data.map(e => {
        return {
            id: e.fifa,
            name: e.name.common,
            img: e.flags,
            continent: e.continent,
            capital: e.capital,
            subregion: e.subregion,
            area: e.area,
            population: e.population
        }
    });
}

async function getCountriesList(){
    const data = readData();
    return data.map( c => {
        return{
            id: c.fifa,
            name: c.name.official,
            continent: c.continents,
            population: c.population,
            img: c.flags
        }
    });
}

async function getDetails(id){
    const data = readData();
    const response = data.find(e => e.id === id.toUpperCase());
    if(!response) throw new Error('No se encontro el pais con es id');
    return response; 
}

async function getCountrie(name){
    const data = readData();
    const countrie = data.find(e => e.name.toLowerCase() === name.toLowerCase());
    if(!countrie) throw new Error('No se encontro el pais solicitado')
    return countrie;
}

async function addActivity(data){
    const readedData = readActivity();
    console.log(readedData);
}

module.exports = {
    getData,
    getCountriesList,
    getDetails,
    getCountrie,
    addActivity
}