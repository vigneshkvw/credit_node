const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { mongoUrl } = require('../config');
const bodyParser = require('body-parser');

// declare schema

 
//routes 
 const LoginRoutes = require('./modules/login/route/LoginRoute');
 const CallRoutes = require('./modules/CallLogs/route/CallRoutes');
 const ticketRoutes = require('./modules/Tickets/route/ticketRoutes');


const option = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.connect("mongodb://up03h6iykxnzcnhybyb3:VZ54C973XnANO71PofqQ@bcxgkfehmngbtpl-mongodb.services.clever-cloud.com:27017/bcxgkfehmngbtpl", option);
mongoose.Promise = global.Promise;


 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
 



app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
      res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
      return res.status(200).json({});
    }
    next();
});
 
 app.use('/Auth', LoginRoutes);
 app.use('/Calls', CallRoutes);
 app.use('/Tickets', ticketRoutes);
// app.use('/books', booksRoutes);
 
module.exports = app;