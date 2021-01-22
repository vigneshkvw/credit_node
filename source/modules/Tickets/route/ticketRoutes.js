const express = require('express');
const router = express.Router();

    var {saveTicket , getTicket} = require('../services/ticketController');
     
    var {TokenAuth} = require('../../login/services/LoginController');
    // router.route('/Auth/register').post(register)

    router.post('/saveticket', (req, res, next) => {
       
        var processBill =(err,data)=>{
            if(err){
                res.status(400).json({
                    message: err
                });
            }else if(data){
                if(req.body){
                    saveTicket(req.body,res)
                }else{
                    res.status(400).json({
                    message: 'Invalid JSON'
                });
                }
            }          
        }
        TokenAuth(req.headers.token, processBill)
    });


    router.get('/getTicket/:customerID', (req, res, next) => {
        var processBill =(err,data)=>{
            if(err){
                res.status(400).json({
                    message: err
                });
            }else if(data){
                if(req.params){
                    getTicket(req.params,res)        
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