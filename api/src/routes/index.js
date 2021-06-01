const { Router } = require('express');
const { authenticate } = require('./login');
const { userInfo } = require('./user')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/direccion', funcionQueNecesitoUsar);

router.post('/api/v0/authenticate', authenticate)
router.get('/api/v0/users/me', userInfo)

module.exports = router;