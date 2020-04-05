const fs = require('fs')
const { join } = require('path')

const filePath = join(__dirname, 'posts.json')


const savePosts = (posts) => fs.writeFileSync(filePath, JSON.stringify(posts, null, '\t'))

module.exports = savePosts
