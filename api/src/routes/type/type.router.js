const express = require('express');
const {getTypeHandler} = require('../../handlers/type/typeHandler')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const typeRouter = express.Router();

// Configurar los routers
// // Ejemplo: router.use('/auth', authRouter);
typeRouter.get ('/', getTypeHandler)



module.exports = typeRouter