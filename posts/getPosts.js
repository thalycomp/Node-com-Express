const fs = require('fs')
const { join } = require('path')

const filePath = join(__dirname, 'posts.json')

const getPosts = () => {
    const data = fs.existsSync(filePath)
        ? fs.readFileSync(filePath)
        : []

    try {
        return JSON.parse(data)
    } catch (error) {
        return []
    }
}

module.exports = getPosts