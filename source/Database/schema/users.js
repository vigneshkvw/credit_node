
'use strict';
var mongoose = require('mongoose');
let validator = require('validator');

var userSchema = new mongoose.Schema({
    UserName: {
        type: String,
      trim: true,
      required: '{PATH} is required!'
    },
    UserID: {
        type: String,
        trim: true,
        required: '{PATH} is required!'
      },
    age: { 
        type: Number,
        min: 18,
        required: '{PATH} is required!'
     },
     address: {
        type: String,
        required: '{PATH} is required!'
      },
      BloodGroup: {
        type: String,
        required: '{PATH} is required!'
      },
      UserRole: {
        type: String,
        trim: true,
        required: '{PATH} is required!'
      },
      ReportedTo: {
        type: String,
        trim: true,
        required: '{PATH} is required!'
      },
      Active: {
        type: Boolean,
        required: '{PATH} is required!'
      },
      PhoneNo: {
        type: Number,
        required: '{PATH} is required!'
      },
      Email: {
        type: String,
        trim: true,
        unique: true,
        lowercase: true,
        validate: (value) => {
          return validator.isEmail(value)
        },
        required: '{PATH} is required!'
      },
     password: {
        type: String,
        required: '{PATH} is required!'
    },
    token: {
      type: String,
  },
  },
  {
    timestamps: true
  });


  
module.exports = mongoose.model('users', userSchema);