const {User} = require("../models/User")
const bcrypt = require('bcrypt');
const saltRounds = 10;

async function authenticate(req, res){
    let user= {
        email: req.body.email,
        password: req.body.password
    }
    console.log(user)
    try {
        let hash= bcrypt.hashSync(user.password, saltRounds)
        let userToCompare= await User.findOne({email: user.email})
        if (bcrypt.compareSync(userToCompare.password, hash)){
            // Generar token y pasar
            res.json('Paso')
        } else {
            res.status(404).json('The username or password does not exist')
        }
    }
    catch(error){console.log(error)}
}

module.exports= {
    authenticate
}