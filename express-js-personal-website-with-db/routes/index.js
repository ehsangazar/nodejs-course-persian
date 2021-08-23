const express = require('express')
const router = express.Router()
const homepageController = require('../controllers/homepageController')
const aboutController = require('../controllers/aboutController')
const contactController = require('../controllers/contactController')

router.get('/', homepageController)
router.get('/about', aboutController)
router.get('/contact', contactController)

module.exports = router
