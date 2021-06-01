require('dotenv').config()
const { BACKEND_PORT, PASSWORD, CONNECTION_STRING, USERNAME }= process.env
const mongoose= require('mongoose')
const cors= require('cors')
const app= require('express')()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const {seed}= require('./dbSeed')
const authJwt= require('./src/helpers/authJWT')


app.use(cors())


// Models
// const User = require('./src/models/User')

// Middlewares
app.use(bodyParser.json());
app.use(morgan('tiny'))

// Routes
const router= require('./src/routes/index')
app.use('/', router)

// Database connection
mongoose.connect(CONNECTION_STRING, {
    useNewUrlParser:true,
    useUnifiedTopology: true,
    dbName: 'login2',
    user: USERNAME,
    pass: PASSWORD
})
.then(()=>{
    console.log('Database conection ready')
    seed() // Only to be used once, this fills the db with the user examples
})
.catch((err)=>{
    console.log(err)
})


app.listen (BACKEND_PORT, ()=>{  
    console.log (`listening on ${BACKEND_PORT}`)
})