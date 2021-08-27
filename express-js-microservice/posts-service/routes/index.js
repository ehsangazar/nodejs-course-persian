const express = require('express')
const router = express.Router()
const postController = require('../controllers/postController')
const upload = require('../helpers/upload')
const resize = require('../helpers/resize')

router.get('/posts', postController.getAll)
router.get('/post/:id', postController.get)
router.post('/posts', upload.single('image'), resize, postController.post)

module.exports = router
