const { validationResult } = require('express-validator')
const User = require('../models/User')

const get = async (req, res) => {
  const existanceUser = await User.findOne({
    where: {
      token: req.query.token,
      token_used: 0,
    },
  })
  if (!existanceUser) {
    req.flash('warning', 'This token is not valid')
    res.render('reset', {
      flash: req.flash(),
      errors: [],
    })
    return
  }

  res.render('reset', {
    flash: req.flash(),
    token: req.query.token,
    errors: [],
  })
}
const post = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    res.render('reset', {
      flash: req.flash(),
      errors: errors.array(),
      token: req.query.token,
    })
    return
  }

  const existanceUser = await User.findOne({
    where: {
      token: req.query.token,
      token_used: 0,
    },
  })
  if (!existanceUser) {
    req.flash('warning', 'This token is not valid')
    res.render('reset', {
      flash: req.flash(),
      errors: [],
      token: req.query.token,
    })
    return
  }

  await User.update(
    {
      password: await User.encryptPassword(req.body.password),
      token_used: 1,
    },
    {
      where: {
        token: req.query.token,
      },
    }
  )

  req.flash('success', 'Your password has successfully reset')

  res.render('reset', {
    flash: req.flash(),
    errors: [],
    token: req.query.token,
  })
}

module.exports = {
  get,
  post,
}
