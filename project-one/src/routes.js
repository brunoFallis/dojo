const { Router } = require('express')
const path = require('path')

const UserController = require('./controllers/UserController')

const routes = Router()

routes.get('/', function(req, res) {
    res.sendFile(path.join(`${__dirname}/index.html`))
})

routes.get('/user', UserController.get)
routes.delete('/user/:id', UserController.delete)
routes.post('/user', UserController.save)
routes.put('/user/:id', UserController.update)

module.exports = routes