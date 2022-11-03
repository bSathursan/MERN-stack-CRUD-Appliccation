const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors');

//import routes
const postRoutes = require('./routes/posts');



const app = express()
// app.use(cors())
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

//app middleware
app.use(bodyParser.json());

//route middleware
app.use(postRoutes)


const port = 8000 
const db_url = 'mongodb+srv://mfc:mfc@mernapp.guikgld.mongodb.net/MFCTASK?retryWrites=true&w=majority'

mongoose.connect(db_url, {
    useNewUrlParser : true,
    useUniFiedTopology : true
})
.then(() => {
    console.log("DB connected successfully")
})
.catch((err) => {
    console.log(err)
})

app.listen(port, () => {
    console.log(`App is running on ${port}`)
})