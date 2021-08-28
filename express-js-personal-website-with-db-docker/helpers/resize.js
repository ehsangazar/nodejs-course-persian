const fs = require('fs')
const sharp = require('sharp')

const resize = async (req, res, next) => {
  await sharp(req.file.path)
    .resize(400)
    .toFile(`public/uploads/${req.file.filename}`)
  await fs.unlinkSync(req.file.path)
  next()
}

module.exports = resize
