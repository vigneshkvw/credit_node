'use strict';
var async = require("async");
var callLogs = require('../../../Database/schema/callLogs');
const constant = require("../../config");

// J0Q9#YJk0+Qt
// id_rsa

module.exports.savelogs = function (CallLogsData, res) {    
            var callLog = new callLogs(CallLogsData);
            callLog.save(function (err, admin) {
        if (err) {
            res.send(err);
        } else {
            res.json({result:constant.Success});
        }
    });
};


module.exports.getLogs = function (CallLogsData, res) {
    callLogs.find(CallLogsData, function(err, result) {
        if (err) throw err;
        else if(result.length){
            res.status(200).json({
                status: constant.Success,
                data : result
            });
        }
        else res.send(constant.NoData) 
      });
};



    
    