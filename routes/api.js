/******************/
/* Import Modules */
/******************/
const express = require('express') // import express module
const router = express.Router()

const Store = require('../models/store') // import store module
const Subscriber = require('../models/subscriber') // import subscriber module
const Team = require('../models/team') // import team module


/******************/
/*  Render Pages  */
/******************/
router.get('/', (req, res) => {
  res.render('index')
})

router.get('/store', (req, res) => {
  res.render('store')
})

router.get('/subscriber', (req, res) => {
  res.render('subscriber')
})

router.get('/team', (req, res) => {
  res.render('team')
})

router.get('/404', (req, res) => {
  res.render('404')
})

// get store data
router.get('/games', async (req, res) => {
  try {
    res.json(await Store.find()) // find all data
  } catch (err) { // catch errors
    console.log(err) // console log the error
    res.send({ error: 'Data Not Found' }) // send JSON 404 error
  }
})

// get subscriber data
router.get('/subs', async (req, res) => {
  try {
    res.json(await Subscriber.find()) // find all data
  } catch (err) { // catch errors
    console.log(err) // console log the error
    res.send({ error: 'Data Not Found' }) // send JSON 404 error
  }
})

// get team data
router.get('/member', async (req, res) => {
  try {
    res.json(await Team.find()) // find all data
  } catch (err) { // catch errors
    console.log(err) // console log the error
    res.send({ error: 'Data Not Found' }) // send JSON 404 error
  }
})

module.exports = router // export router