const express = require('express');
const router = express.Router();

    var {savelogs , getLogs} = require('../services/CallsController');
     
    var {TokenAuth} = require('../../login/services/LoginController');
    // router.route('/Auth/register').post(register)

    router.post('/callLogs', (req, res, next) => {
       
        var processBill =(err,data)=>{
            if(err){
                res.status(400).json({
                    message: err
                });
            }else if(data){
                if(req.body){
                    savelogs(req.body,res)
                }else{
                    res.status(400).json({
                    message: 'Invalid JSON'
                });
                }
            }          
        }
        TokenAuth(req.headers.token, processBill)
    });


    router.get('/callLogs/:TicketID', (req, res, next) => {
        var processBill =(err,data)=>{
            if(err){
                res.status(400).json({
                    message: err
                });
            }else if(data){
                if(req.params){
                    getLogs(req.params,res)        
                }else{
                    res.status(400).json({
                        message: 'Query Params missing'
                    });
                }
            }          
        }
        TokenAuth(req.headers.token, processBill)
       
    });

    module.exports = router;