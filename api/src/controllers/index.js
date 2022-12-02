const axios = require('axios');
const fs = require('fs');
const { db, Op, Country } = require('../db.js');

function readData(){
    return JSON.parse(fs.readFileSync('data.json', 'utf-8'));
}

async function getData(){
    const consult = await Country.findAndCountAll();
    
    if(consult.count === 0){
        let data = readData(); // Cambiar por un fetch

        data.map(async e => {
            await Country.create({
                id: e.cca3,
                name: e.name.common,
                img: e.flags[0],
                continent: e.continents[0],
                capital: e.capital ? e.capital[0] : null,
                subregion: e.subregion ? e.subregion : null,
                area: e.area,
                population: e.population
            });
        });
    }
    await Country.findAndCountAll();
}

async function getCountriesList(){
    return await Country.findAll({
        attributes: [ 'id', 'name', 'img', 'continent', 'population']
    });
}

async function getCountrie(name){
    // Obtenemos todos los nombres para hacer compararlos con el string que nos pasan
    const consult = await Country.findAll({
        attributes: [ 'id', 'name' ]
    });

    // Macheamos los paises que contengan el string
    match = consult.filter( c => c.dataValues.name.toLowerCase().includes(name.toLowerCase())).map(c => c.dataValues.id);
    
    // Devolvemos un error en caso de no encontrar nada
    if(match.length === 0) throw new Error('Country not found');

    // Por ultimo pedimos los detalles que necesitamos de esos paises para devolverlos
    return await Country.findAll({
        where: { id : match },
        attributes: [ 'id', 'name', 'img', 'continent', 'population']
    });
}

async function getDetails(id){
    const consult = await Country.findOne({
        where: { id: id }
    });
    if(!consult) throw new Error(`Country ${id} not found`);
    return consult;
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