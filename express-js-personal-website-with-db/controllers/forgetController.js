const { validationResult } = require('express-validator')
const User = require('../models/User')
const sendMail = require('../utils/sendMail')
const ejs = require('ejs')
const path = require('path')
const md5 = require('md5')

const get = (req, res) => {
  res.render('forget', {
    flash: req.flash(),
    errors: [],
  })
}
const post = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    res.render('forget', {
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
  if (!existanceUser) {
    req.flash('warning', 'This user does not exists')
    res.render('forget', {
      flash: req.flash(),
      errors: [],
    })
    return
  }

  const token = md5(req.body.email + new Date())
  await User.update(
    {
      token: token,
      token_used: 0,
    },
    {
      where: {
        email: req.body.email,
      },
    }
  )

  const html = await ejs.renderFile(
    path.join(__dirname, '../views/mail/auth.ejs'),
    {
      title: 'Forget Password Instruction',
      description: 'Please click on the link below',
      link: `${process.env.URL}/reset?token=${token}`,
    }
  )

  await sendMail({
    to: req.body.email,
    subject: 'Forget Password Instruction',
    html: html,
  })

  req.flash('success', 'New instruction has been sent to your mailbox')
  res.render('forget', {
    flash: req.flash(),
    errors: [],
  })
}

module.exports = {
  get,
  post,
}
