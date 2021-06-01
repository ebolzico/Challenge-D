const expressJwt = require('express-jwt')

// npm install express-jwt

function authJwt (){
    const secret = process.env.secret;
    const api = process.env.API
    return expressJwt({
        secret,
        algorithms:['HS256'],
        isRevoked: isRevoked
    }).unless({
        path:[
            {url: 'http://localhost:3002/user', methods:['GET', 'POST']},
        ]
    })
}


//REJECT the token is not admin
async function isRevoked (req, payload, done){
    if(!payload.isAdmin){
        return done(null, true)
    }
    done();
}

module.exports = authJwt;