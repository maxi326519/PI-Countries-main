const fs = require('fs');
const { Country, Activity } = require('../db.js');

function readData(){
    return JSON.parse(fs.readFileSync('data.json', 'utf-8'));
}

async function getData(){
    const consult = await Country.findAndCountAll();
    
    if(consult.count === 0){
        let data
/*         await fetch('https://restcountries.com/v3/all')
        .then( res => res.json() )
        .then( res => data = res )
        .catch( err => console.log(err) ) */
        data = readData();

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
        where: { id: id },
        include: Activity
    });
    if(!consult) throw new Error(`country ${id} not found`);

    return consult;
}

async function addActivity(data){
    if(!data.name || !data.dificulty || !data.duration || !data.season) throw new Error('bad request')

    const exist = await Activity.findOne({ where: {name: data.name } });
    
    if(exist) throw Error('The activity already exist');

    const actividad = await Activity.create({
        name: data.name,
        dificulty: data.dificulty,
        duration: data.duration,
        season: data.season
    })

    const countries = await Country.findAll({ where: { id: data.countries } })

    countries.forEach(async countrie => {
        await actividad.addCountry(countrie);
    });
}

module.exports = {
    getData,
    getCountriesList,
    getDetails,
    getCountrie,
    addActivity
}