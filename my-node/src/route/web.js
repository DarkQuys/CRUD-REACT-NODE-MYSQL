let router = require('express').Router()
let controller = require('../controller/controller')
let initWebRouter = (app) => {
    router.get('/alluser' ,controller.getAll)
    router.post("/create", controller.hello)
    //router.put("/update" , controller.editUser)
    router.put('/update/:id', controller.editUser)
    router.delete('/delete/:id' ,controller.deleteThisUser)
    return app.use("/" , router) 
}

module.exports = {
    initWebRouter
}