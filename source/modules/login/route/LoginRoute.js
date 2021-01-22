const express = require('express');
const router = express.Router();

    var {register , login} = require('../services/LoginController');
     

    router.post('/register', (req, res, next) => {


        if(req.body){
            register(req.body,res)
        }else{
            res.status(400).json({
            message: 'Invalid JSON'
        });
        }
    });


    router.post('/login', (req, res, next) => {
        if(req.body){
            login(req.body,res)
        }else{
            res.status(400).json({
            message: 'Invalid JSON'
        });
        }
    });

    module.exports = router;