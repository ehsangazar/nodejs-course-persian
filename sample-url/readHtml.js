const { readFileSync } = require("fs")

const readHtml = (path) => {
    return readFileSync(path)
}

module.exports = readHtml