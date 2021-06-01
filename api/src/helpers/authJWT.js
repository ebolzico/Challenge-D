const { BACKEND_PORT, PASSWORD, CONNECTION_STRING, secret }= process.env
const jwt= require('jsonwebtoken')
// npm install express-jwt

async function authJwt(req, _, next){
    try{
        const token= req.header('Authorization').replace('Bearer ', '')
        console.log(token, secret, 'aut')
        const {email} = jwt.verify(token, secret)
        req.email=email
        next()
    }
    catch(error){res.status(401).send({ error: 'Unauthorized' })}
}

module.exports = authJwt;