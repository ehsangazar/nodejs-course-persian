const express = require('express')
const router = express.Router()
const loginController = require('../controllers/loginController')
const signupController = require('../controllers/signupController')
const forgetController = require('../controllers/forgetController')
const { body } = require('express-validator')
const logoutController = require('../controllers/logoutController')
const { isNotLoggedIn } = require('../helpers/auth')
const mailController = require('../controllers/mailController')
const resetController = require('../controllers/resetController')

router.get('/login', isNotLoggedIn, loginController.get)
router.post(
  '/login',
  isNotLoggedIn,
  body('email').isEmail().normalizeEmail().toLowerCase(),
  body('password').isLength({ min: 6 }),
  loginController.post
)
router.get('/signup', isNotLoggedIn, signupController.get)
router.post(
  '/signup',
  isNotLoggedIn,
  body('name').not().isEmpty(),
  body('email').isEmail().normalizeEmail().toLowerCase(),
  body('password').isLength({ min: 6 }),
  signupController.post
)
router.get('/forget', isNotLoggedIn, forgetController.get)
router.post(
  '/forget',
  isNotLoggedIn,
  body('email').isEmail().normalizeEmail().toLowerCase(),
  forgetController.post
)
router.get('/logout', logoutController)
router.get('/mail', mailController)
router.get('/reset', resetController.get)
router.post(
  '/reset',
  isNotLoggedIn,
  body('password').isLength({ min: 6 }),
  resetController.post
)

module.exports = router
