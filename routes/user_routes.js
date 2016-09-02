'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const User = require(__dirname + '/../models/user')
const eatAuth = require(__dirname + '/../lib/eat_auth')
const handleError = require(__dirname + '/../lib/handle_error')
const usersRouter = module.exports = express.Router()

usersRouter.get('/users', function(req, res) {
  User.find({}, function(err, data) {
    if (err) return handleError(err, res)

    res.json(data)
  })
})

usersRouter.post('/users', function(req, res) {
  const newUser = new User(req.body)
  newUser.save(function(err, data) {
    if (err) return handleError(err, res)

    res.json({
      success: true,
      msg: 'Meathead added.'
    })
  })
})

usersRouter.put('/users/:id', bodyParser.json(), function(req, res) {
  let userData = req.body
  delete userData._id
  User.update({_id: req.params.id}, userData, function(err) {
    if (err) return handleError(err, res)

    res.json({
      msg: 'Meathead edited.'
    })
  })
})

usersRouter.delete('/users/:id', function(req, res) {
  User.remove({_id: req.params.id}, function(err) {
    if (err) return handleError(err, res)

    res.json({
      msg: 'Meathead deleted.'
    })
  })
})
