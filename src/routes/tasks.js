const express = require("express")
const Task = require('../models/tasks')


const router = express.Router()


router.post("/task", async (req, res) => {
    try {
        const { title, description, priority, status } = req.body
        const task = new Task({ title, description, priority, status })
        await task.save()
        res.status(201).json(task)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get("/tasks",async(req,res)=>{
    try{
        const tasks = await Task.find().limit(100)
        res.json(tasks)
    }catch(error){
        res.status(500).json({ message: error.message })

    }
})

module.exports = router
