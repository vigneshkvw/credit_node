'use strict';
var sha1 = require('sha1');
var fs = require('fs');
var path = require('path');
var async = require("async");
var randtoken = require('rand-token');
var Users = require('../../../Database/schema/users');
var Constant = require('../../config')

// J0Q9#YJk0+Qt
// id_rsa

module.exports.register = function (UserData, res) {    
UserData.password = sha1(UserData.password);
UserData.Active = true;
            var User = new Users(UserData);
            User.save(function (err, admin) {
        if (err) {
            res.status(400);
            res.send(err);
        } else {
            res.json({result:Constant.Success});
        }
    });
};


module.exports.login = function (UserData, res) {  
    var Randtoken;  
    UserData.password = sha1(UserData.password);

      var  EmailValidate =  function (callback) {
            Users.find({UserID : UserData.UserID}, function(err, result) {
                if (err) throw err;
                else if(result.length) callback(null,result); 
                else callback(Constant.InvalidUserID) 
              });
        },
        LoginProcess =  function (oldMedium, callback) {
            Users.find(UserData, function(err, result) {
                if (err) throw err;
                else if(result.length){
                    Randtoken=randtoken.generate(62);
                    result[0].token = Randtoken;
                 callback(null,result); 
                }
                else callback(Constant.InvalidPassWord) 
              });
        },
        saveToken =  function (oldMedium, callback) {           
         var myquery = {UserID : UserData.UserID};
         var newvalues = {$set: {token: Randtoken} };
            Users.update(myquery, newvalues, function(err, result) {
                if (err) throw callback(err);
                else if(result){
                 callback(null,oldMedium); 
                }               
              });
        },
        finalCallback =  function (err, callback) {
            if(err){
                res.send({ 
                    Status:Constant.Error,
                    message: err
                  })
            }else{
                res.json({Status :Constant.Success,data : callback})
            }
        }
        async.waterfall([EmailValidate,LoginProcess,saveToken],finalCallback)
    };


module.exports.TokenAuth = function (UserData, callback) {       
       Users.find({token : UserData}, function(err, result) {
            if (err) throw err;
                 else if(result.length) callback(null,result); 
                else callback(Constant.InvalidToken) 
              });            
};
    
    