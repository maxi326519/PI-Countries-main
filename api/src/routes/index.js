const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/countries',(req, res)=>{
    // Traer info de la base de datos
    // Devolver un listado de las paises
    try{

    }catch(exception){
        res.status(/* DEFINIR */).json({ error: exception.message });
    }
});

router.get('/countries/:pais', (req, res)=>{
    // Devolver detalles de los paises y actividades turisticas
    try{

    }catch(exception){
        res.status(/* DEFINIR */).json({ error: exception.message });
    }
});

router.get('/countries',(req, res)=>{
    const { name } = req.query;
    try{
        // Devolver los paises que coincidan con el texto pasado por parametros (No exacto, que contenga)
    }catch(exception){
        res.status(/* DEFINIR */).json({ error: exception.message });
    }
});

router.post('/activities', (req, res)=>{
    try{

    }catch(exception){
        res.status(/* DEFINIR */).json({ error: exception.message });
    }
});

module.exports = router;