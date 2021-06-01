const { Router } = require('express');
const { findUser, addUser } = require('./user');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/direccion', funcionQueNecesitoUsar);

router.get('/api/v0/authenticate', authenticate)
router.post('/api/v0/users/me', userInfo)

module.exports = router;