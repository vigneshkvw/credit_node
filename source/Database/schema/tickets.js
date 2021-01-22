
'use strict';
var mongoose = require('mongoose');
let validator = require('validator');

var userSchema = new mongoose.Schema({
    customerName: {
        type: String,
        trim: true,
        required: '{PATH} is required!'
      },
    customerID: { 
        type: String,
        trim: true,
        required: '{PATH} is required!'
     },
     phoneNumber: {
        type: String,
        required: '{PATH} is required!'
      },
      workFlow: [{
        Assignedto: String, 
        Reason: String,
        comments: String
    }    
],
      Assignee: {
        type: String,
        required: '{PATH} is required!'
      },
      status: {
        type: String,
        required: '{PATH} is required!'
      },
      Active: {
        type: Boolean,
        required: '{PATH} is required!'
      }
  },
  {
    timestamps: true
  });


  
module.exports = mongoose.model('Tickets', userSchema);