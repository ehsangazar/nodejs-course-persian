const nodemailer = require('nodemailer')

const sendMail = async ({ to, subject, text, html }) => {
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_SERVER,
    port: process.env.MAIL_PORT,
    secure: true,
    auth: {
      user: process.env.MAIL_USERNAME, // generated ethereal user
      pass: process.env.MAIL_PASSWORD, // generated ethereal password
    },
  })

  const info = await transporter.sendMail({
    from: '"Ehsan Gazar" <me@ehsangazar.com>', // sender address
    to,
    subject,
    text,
    html,
  })

  console.log('Message sent: %s', info.messageId)
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
  return info.messageId
}

module.exports = sendMail
