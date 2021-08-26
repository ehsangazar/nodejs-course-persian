const express = require('express')
const router = express.Router()
const homepageController = require('../controllers/homepageController')
const postController = require('../controllers/postController')
const aboutController = require('../controllers/aboutController')
const contactController = require('../controllers/contactController')
const categoryController = require('../controllers/categoryController')
const loginController = require('../controllers/loginController')
const signupController = require('../controllers/signupController')
const forgetController = require('../controllers/forgetController')
const searchController = require('../controllers/searchController')
const { body } = require('express-validator')
const dashboardController = require('../controllers/dashboardController')
const logoutController = require('../controllers/logoutController')
const { isLoggedIn, isNotLoggedIn } = require('../helpers/auth')
const mailController = require('../controllers/mailController')
const resetController = require('../controllers/resetController')
const AdminPostController = require('../controllers/AdminPostController')
const upload = require('../helpers/upload')
const resize = require('../helpers/resize')
const testController = require('../controllers/testController')

router.get('/', homepageController)
router.get('/post/:id', postController)
router.get('/category/:id', categoryController)
router.get('/about', aboutController)
router.get('/contact', contactController)
router.get('/search', searchController)
router.get('/dashboard', dashboardController)

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
router.get('/admin/create', AdminPostController.get)
router.post(
  '/admin/create',
  upload.single('image'),
  resize,
  AdminPostController.post
)

router.get('/test', testController)

module.exports = router
