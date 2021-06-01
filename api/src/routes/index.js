const { Router } = require('express');
const authJwt = require('../helpers/authJWT');
const { authenticate } = require('./login');
const { userInfo } = require('./user')

const router = Router();

router.post('/api/v0/authenticate', authenticate)
router.use(authJwt)
router.get('/api/v0/users/me', /* [authToken], */ userInfo)

module.exports = router;