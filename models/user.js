'use strict'

const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const eat = require('eat')
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  location: {
    type: String,
    default: 'Add a location.'
  },
  workplace: {
    type: String,
    default: 'Where do you work?'
  }
  auth: {
    basic: {
      username: String,
      password: String
    }
  }
})

userSchema.methods.hashPassword = function(password) {
  let hash = this.auth.basic.password = bcrypt.hashSync(password, 8)
  return hash
}

userSchema.methods.checkPassword = function(password) {
  return bcrypt.compareSync(password, this.auth.basic.password)
}

userSchema.methods.generateToken = function(callback) {
  let id = this._id
  eat.encode({id: id}, process.env.APP_SECRET, callback)
}

module.exports = mongoose.model('User', userSchema)
