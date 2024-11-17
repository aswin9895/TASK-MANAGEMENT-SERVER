const express = require('express')
const userController = require('../controllers/userController')
const taskController = require('../controllers/taskController')
const jwtMiddleware = require('../middlewares/jwtMiddleware')

const router = new express.Router()

// register
router.post('/register',userController.userRegisterController)
// login
router.post('/login',userController.userLoginController)
// add task - authorisation needed
router.post('/addtask',jwtMiddleware,taskController.addTaskController)
// get task
router.get('/gettask',jwtMiddleware,taskController.getUserTasks)
// edit task
router.put('/task/:id/edit',jwtMiddleware,taskController.editTaskController)
// delete task
router.delete('/task/:id/delete',jwtMiddleware,taskController.deleteTaskController)


module.exports=router