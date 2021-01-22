
'use strict';
var mongoose = require('mongoose');
let validator = require('validator');

var userSchema = new mongoose.Schema({
    UserID: {
        type: String,
        trim: true,
        required: '{PATH} is required!'
      },
    TicketID: { 
        type: Number,
        min: 18,
        required: '{PATH} is required!'
     },
     callTime: {
        type: Date,
        required: '{PATH} is required!'
      },
      callDuration: {
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


  
module.exports = mongoose.model('callLogs', userSchema);