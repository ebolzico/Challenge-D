const expressJwt = require('express-jwt')
const { User } = require('../models/User')
const { BACKEND_PORT, PASSWORD, CONNECTION_STRING, secret }= process.env
const jwt= require('jsonwebtoken')
// npm install express-jwt

async function authJwt(req, res){
    try{
        const token= req.header('Authorization').replace('Bearer ', '')
        console.log(token, secret, 'aut')
        const {email} = jwt.verify(token, secret)
        /* const user= await User.findOne({email: data.email})
        if (!user){res.status(404).send({ error: 'Not found' })}
        */
        req.email=email
        next()
    }
    catch(_){res.status(401).send({ error: 'Unauthorized' })}
}

module.exports = authJwt;