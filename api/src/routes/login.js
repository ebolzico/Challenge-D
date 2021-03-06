const {User} = require("../models/User")
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt= require('jsonwebtoken')
const secret= process.env.secret

async function authenticate(req, res){
    const user= {
        email: req.body.email,
        password: req.body.password
    }
    try {
        let hash= bcrypt.hashSync(user.password, saltRounds)
        const userToCompare= await User.findOne({email: user.email})
        if (!userToCompare) {return res.status(404).json({message: 'The username or password does not exist'})}
        if (bcrypt.compareSync(userToCompare.password, hash)){
            const token = jwt.sign(
                {
                    email: userToCompare.email
                },
                secret
            )
            res.status(200).json(token)
        } else {
            res.status(404).json({message: 'The username or password does not exist'})
        }
    }
    catch(error){console.log(error)/* res.status(400).json({message: 'Bad body request'}) */}
}

module.exports= {
    authenticate
}