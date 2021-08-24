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
const { body } = require('express-validator')
const dashboardController = require('../controllers/dashboardController')

router.get('/', homepageController)
router.get('/post/:id', postController)
router.get('/category/:id', categoryController)
router.get('/about', aboutController)
router.get('/contact', contactController)
router.get('/search', searchController)
router.get('/dashboard', dashboardController)

router.get('/login', loginController.get)
router.post(
  '/login',
  body('email').isEmail().normalizeEmail().toLowerCase(),
  body('password').isLength({ min: 6 }),
  loginController.post
)
router.get('/signup', signupController.get)
router.post(
  '/signup',
  body('name').not().isEmpty(),
  body('email').isEmail().normalizeEmail().toLowerCase(),
  body('password').isLength({ min: 6 }),
  signupController.post
)

module.exports = router
