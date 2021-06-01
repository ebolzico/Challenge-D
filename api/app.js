require('dotenv').config()
const { BACKEND_PORT, PASSWORD, CONNECTION_STRING }= process.env
const mongoose= require('mongoose')
const cors= require('cors')
const app= require('express')()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const filldb= require('./dbSeed')

//ENABLE CORS BEFORE ANYTHING
app.use(cors())
//ALLOWING ALL HTTP REQUEST  with *
app.options('*', cors())

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
    user: 'bolzicoemanuel',
    pass: PASSWORD
})
.then(()=>{
    console.log('Database conection ready')
    filldb()
})
.catch((err)=>{
    console.log(err)
})


app.listen (3002, ()=>{  
    console.log (`listening on ${BACKEND_PORT}`)
})