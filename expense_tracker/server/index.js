const express = require('express');
const app = express();
const dotenv = require('dotenv')
dotenv.config();
const cors = require('cors');
const port = process.env.PORT || 5000;
const mongourl = process.env.LiveMongo;
const users = require('./controllers/HistoryContoller');

app.use(cors());
app.use(express.json());
app.use('/api',users);



let mongoose = require('mongoose');
mongoose.connect(mongourl,{useNewUrlParser : true,useUnifiedTopology : true})
.then(()=>{app.listen(port,()=>{console.log("started")})})
.catch((err)=>{console.log(err.message)})
