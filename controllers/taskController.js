
const tasks = require('../models/taskModel');

// addtask authorisation needed
exports.addTaskController = async (req, res) => {
    console.log("inside addTaskController");
    const userId = req.userId
    console.log(userId);
    const { task, description, startDate, endDate, progress } = req.body;
    console.log(task, description, startDate, endDate, progress);
    try {
        if (task && description && startDate && endDate && progress) {
            const newTask = new tasks({
                task, description, startDate, endDate, progress, userId
            })
            await newTask.save()
            res.status(200).json(newTask)
        } else {
            res.status(406).json("Task Creation Failed... Try again!!!")
        }

    } catch (error) {
        res.status(401).json(error)
    }
};

// gettask authorisation needed
exports.getUserTasks = async (req, res) => {
    console.log("inside gettaskcontroller");
    const userId = req.userId
    try {
        const allUserTask = await tasks.find({ userId })
        res.status(200).json(allUserTask)
    } catch (error) {
        res.status(401).json(error)
    }

}

// edit task authorisation needed
exports.editTaskController = async (req, res) => {
    console.log("inside edittask controller");
    const id = req.params.id
    const userId = req.userId
    const { task, description, startDate, endDate, progress } = req.body
    try {
        const updateTask = await tasks.findByIdAndUpdate({ _id: id }, {
            task, description, startDate, endDate, progress, userId
        }, { new: true })
        await updateTask.save()
        res.status(200).json(updateTask)

    } catch (error) {
        res.status(401).json(error)

    }
}

// delete task authorisation needed
exports.deleteTaskController = async (req, res) => {
    console.log("Indise deleteTaskcontroller");
    const {id} = req.params
    try {
        const deleteTask = await tasks.findByIdAndDelete({ _id: id })
        res.status(200).json(deleteTask)
    } catch (error) {
        res.status(401).json(error)
    }
    
}