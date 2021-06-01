const {User} = require("../models/User")
const bcrypt = require('bcrypt');
const saltRounds = 10;

async function authenticate(req, res){
    let user= {
        email: req.body.email,
        password: req.body.password
    }
    try {
        let hash= bcrypt.hashSync(user.password, saltRounds)
        let userToCompare= await User.findOne({email: user.email, password: user.password})
        if (bcrypt.compareSync(userToCompare.password, hash)){
            // Generar token y pasar
            res.json('Paso')
        }
    }
    catch(error){console.log(error)}
}

module.exports= {
    authenticate
}