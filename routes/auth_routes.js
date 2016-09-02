'use strict'

const express = require('express')
const jsonParser = require('body-parser').json()
const handleError = require(__dirname + '/../lib/handle_error')
const basicHttp = require(__dirname + '/../lib/basic_http_authentication')
const User = require(__dirname + '/../models/user')
const eatAuth = require(__dirname + '/../lib/eat_auth')

const authRouter = module.exports = exports = express.Router()

authRouter.post('/sign-up', jsonParser, function(req, res) {
  const user = new User()
  user.name = req.body.name
  user.username = req.body.username
  user.email = req.body.email
  user.auth.basic.username = req.body.username
  user.hashPassword(req.body.password)

  user.save(function(err, data) {
    if (err) return handleError(err, res)

    user.generateToken(function(err, token) {
      if (err) return handleError(err, res)

      res.json({
        success: true,
        msg: 'Success!  Please login above.',
        token: token})
    })
  })
})

authRouter.get('/sign-in', basicHttp, function(req, res) {
  if (!(req.auth.username && req.auth.password)) {
    console.log(err)
    return res.status(401).json({
      msg: 'Authenitcation failed.'
    })
  }

  User.findOne({'auth.basic.username': req.auth.username}, function(err, user) {
    if (err || !user || !user.checkPassword(req.auth.password)) {
      console.log(err)
      return res.status(401).json({
        msg: 'Authenitcation failed.'
      })
    }

    user.generateToken(function(err, token) {
      res.json({
        token: token,
        msg: 'Sign-in successful!'
      })
   })
  })
})

// get req asking for username, bio, quote
// if no token, redirect to home page
// if token, give ability to email

authRouter.get('/users', eatAuth, function(req, res) {
  res.json({
    _id: req.user._id,
    username: req.user.username,
    name: req.user.name,
    email: req.user.email,
    biography: req.user.biography,
    quote: req.user.quote,
    location: req.user.location,
    gym: req.user.gym
  })
})
