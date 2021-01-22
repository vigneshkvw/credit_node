'use strict';
var async = require("async");
var tickets = require('../../../Database/schema/tickets');
const constant = require("../../config");

// J0Q9#YJk0+Qt
// id_rsa

module.exports.saveTicket = function (ticketData, res) {    
            var Ticket = new tickets(ticketData);
            Ticket.save(function (err, admin) {
        if (err) {
            res.send(err);
        } else {
            res.json({result:constant.Success});
        }
    });
};


module.exports.getTicket = function (ticketData, res) {
    tickets.find(ticketData, function(err, result) {
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



    
    