/******************/
/* Import Modules */
/******************/
const express = require('express') // import express module
const router = express.Router()
router.use(express.urlencoded({ extended: true }))

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

router.get('/store/:id', (req, res) => {
  res.render('store')
})

router.get('/subscribe', (req, res) => {
  res.render('subscribe')
})

router.get('/team', (req, res) => {
  res.render('team')
})

router.get('/admin', (req, res) => {
  res.render('admin/index')
})

router.get('/404', (req, res) => {
  res.render('404')
})

// get store data
router.get('/games', async (req, res) => {
  try {
    const data = await Store.find() // find all data

    if (data.length !== 0) { // check if mongoose data existest
      res.json(data) // find 1 game based on id
    } else { // else
      res.send({ error: 'Games Not Found' }) // send JSON 404 error
    }

  } catch (err) { // catch errors
    console.log(err) // console log the error
    res.send({ error: 'Data Not Found' }) // send JSON 404 error
  }
})

// get game based on id
router.get('/games/:id', async (req, res) => {
  try {
    const data = await Store.find({ id: req.params.id })

    if (data.length !== 0) { // check if mongoose data existest
      res.json(data) // find 1 game based on id
    } else { // else
      res.send({ error: 'Game Not Found' }) // send JSON 404 error
    }

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

// add new subscriber
router.post('/join', async (req, res) => {
  try {
    const newSub = new Subscriber(req.body)

    await newSub.save() // save user
    res.send('<h1>Congratulations, You’ve Subscribed Successfully!</h1><a href="subscribe">Click Here To Go Back</a>')
    console.log(newSub)

  } catch (err) { // catch errors
    // check if user is subscribed
    if (err.code === 11000) {
      res.send('<h1>You’re Already Subscribed!</h1><a href="subscribe">Click Here To Go Back</a>')
    } else {
      res.send('<h1>Something Went Wrong!</h1><a href="subscribe">Click Here To Go Back</a>')
    }
    console.log(err) // console log the error
  }
})

module.exports = router // export router