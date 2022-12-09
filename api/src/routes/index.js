const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

const { getData, getCountriesList, getDetails, getCountrie, addActivity } = require('../controllers');

router.get('/countries',async (req, res)=>{
    const body = { america, europe, africa, asia, oceania, antarctica } = req.body;
    const { name } = req.query;
    let response;

    try{
        if(name) response = await getCountrie(name);
        else{
            await getData();
            response = await getCountriesList();
        }
        res.status(200).json(response);
    }catch(exception){
        res.status(404).json({ error: exception.message });
    }
});

router.get('/countries/:id', async (req, res)=>{
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
    try{
        const response = await addActivity(body);
        res.status(200).json({ message: 'Saved successfully' });
    }catch(exception){
        res.status(400).json({ error: exception.message });
    }
});

module.exports = router;