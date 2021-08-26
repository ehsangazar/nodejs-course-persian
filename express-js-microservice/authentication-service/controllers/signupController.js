const { validationResult } = require('express-validator')
const User = require('../models/User')
const sendMail = require('../utils/sendMail')
const ejs = require('ejs')
const path = require('path')

const get = (req, res) => {
  res.render('signup', {
    flash: req.flash(),
    errors: [],
  })
}
const post = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    res.render('signup', {
      flash: req.flash(),
      errors: errors.array(),
    })
    return
  }

  const existanceUser = await User.findOne({
    where: {
      email: req.body.email,
    },
  })
  if (existanceUser) {
    req.flash('warning', 'This user already exists')
    res.render('signup', {
      flash: req.flash(),
      errors: [],
    })
    return
  }

  await User.create({
    name: req.body.name,
    email: req.body.email,
    password: await User.encryptPassword(req.body.password),
    age: 0,
  })

  const html = await ejs.renderFile(
    path.join(__dirname, '../views/mail/auth.ejs'),
    {
      title: 'Welcome to My Blog',
      description: 'You have successfully registered in Ehsan Gazar Blog',
      link: null,
    }
  )

  await sendMail({
    to: req.body.email,
    subject: 'Welcome to My Blog',
    html: html,
  })

  res.render('signup', {
    flash: req.flash(),
    errors: [],
  })
}

module.exports = {
  get,
  post,
}
