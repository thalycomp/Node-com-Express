const Joi = require('joi');
const savePosts = require('../posts/savePosts')
const getPosts = require('../posts/getPosts')



const schema = Joi.object().keys({
    name: Joi.string()
        .min(4)
        .required(),
    email: Joi.string()
        .email()
        .required(),
    title: Joi.string()
        .min(5)
        .required(),
    post: Joi.string()
        .min(10)
        .required(),
})


const postRoute = (app) => {
    app.route('/microblog')
        .get((req, res) => {
            const posts = getPosts()

            res.send({ posts })
        })
        .post((req, res) => {
            const result = Joi.validate(req.body, schema)
            const {value, error} = result

            let id = Math.ceil(Math.random() * 9999999);
            id = id.toString();
   
            if(error){
                console.log(error)
                return res.status(400).json({ error: 'Validate fails' })
            }    
            const posts = getPosts()
            
            const postcomplete = {
                id,
                ...value
            }
            posts.push(postcomplete)
            savePosts(posts)
            res.status(201).send('OK')
        })
        .delete((req, res) => {
            const posts = getPosts()
            console.log(posts.id)
            savePosts(posts.filter(post => post.id !== req.params.id))
            
            res.status(200).send('OK') 
        })
}

module.exports = postRoute