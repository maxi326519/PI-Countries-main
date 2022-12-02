const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

const { getData, getCountriesList, getDetails, getCountrie, addActivity } = require('../controllers');

router.get('/countries',async (req, res)=>{
    // Traer info de la base de datos
    // Devolver un listado de las paises
    const { name } = req.query;
    try{
        let response;
        if(name) response = getCountrie(name);
        else{
            console.log('trae todo');
            response = await getCountriesList();
        }
        res.status(200).json(response);
    }catch(exception){
        res.status(404).json({ error: exception.message });
    }
});

router.get('/countries/:id', async (req, res)=>{
    // Devolver detalles de los paises y actividades turisticas
    const { id } = req.params;
    console.log(id);
    try{
        const response = await getDetails(id);
        res.status(200).json(response);
    }catch(exception){
        res.status(404).json({ error: exception.message });
    }
});

router.post('/activities', async (req, res)=>{
    const body = req.body;
    console.log(body);
    try{
        const response = await addActivity();
        res.status(200).json(response);
    }catch(exception){
        res.status(400).json({ error: exception.message });
    }
});

module.exports = router;