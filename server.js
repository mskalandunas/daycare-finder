'use strict'

const mongoose = require('mongoose')
const express = require('express')
const app = express()
const p = 3000 || process.env.PORT
const usersRouter = require(__dirname + '/routes/user_routes')
const authRouter = require(__dirname + '/routes/auth_routes')
const bodyParser = require('body-parser')

process.env.APP_SECRET = process.env.APP_SECRET || 'plschangethis'

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/api_dev')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/api/', authRouter)
app.use('/api/', usersRouter)

app.use(express.static(__dirname + '/build/'))
app.listen(p, () => {
  console.log('Listening.')
})
