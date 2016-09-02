'use strict'

const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const eat = require('eat')
const daycareSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
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

module.exports = mongoose.model('Dayce', daycareSchema)
