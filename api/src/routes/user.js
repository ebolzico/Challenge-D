const {User} = require("../models/User")


async function userInfo(req, res){
    let user={
        email: req.body.email,
        password: req.body.password,
        token: req.body.token
    }
    /*
        Esta es la parte de la comparacion
        entre el token enviado y el guardado
    */
    try{
        let userData= await User.findOne({email: user.email, password: user.password})
        res.status(200).json(userData)
    }
    catch(error){}
}

module.exports= {
    userInfo
}