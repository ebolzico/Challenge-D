const {User} = require("../models/User")
const secret= process.env.secret

async function userInfo(req, res){   
    try{
        console.log('text', req.email)
        let userData= await User.findOne({email: req.email})
        if (!userData) {return res.status(404).json({message: 'The username or password does not exist'})}
        console.log(userData)
        res.status(200).json(userData)
    }
    catch(error){res.status(400).json({message: 'Bad body request'})}
}

module.exports= {
    userInfo
}