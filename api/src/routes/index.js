const { Router } = require('express');
const authJwt = require('../helpers/authJWT');
const { authenticate } = require('./login');
const { userInfo } = require('./user')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/direccion', funcionQueNecesitoUsar);
router.post('/api/v0/authenticate', authenticate)
router.use(authJwt)
router.get('/api/v0/users/me', /* [authToken], */ userInfo)

module.exports = router;