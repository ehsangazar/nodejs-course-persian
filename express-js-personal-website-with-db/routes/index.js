const express = require('express')
const router = express.Router()
const homepageController = require('../controllers/homepageController')
const postController = require('../controllers/postController')
const aboutController = require('../controllers/aboutController')
const contactController = require('../controllers/contactController')
const categoryController = require('../controllers/categoryController')
const loginController = require('../controllers/loginController')
const signupController = require('../controllers/signupController')
const searchController = require('../controllers/searchController')

router.get('/', homepageController)
router.get('/post/:id', postController)
router.get('/category/:id', categoryController)
router.get('/about', aboutController)
router.get('/contact', contactController)
router.get('/search', searchController)

router.get('/login', loginController)
router.get('/signup', signupController)
router.post('/signup', signupController)

module.exports = router
