const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const { exampleController } = require('../controllers');
const User = require("../models/user")
const Task = require('../models/tasks')


router.post("/", (req, res) => {
    return "hii"
})
router.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
            username, password: hashedPassword
        });
        await user.save()
        res.status(201).json({ message: "User Created Sucessfully" })
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }


})

router.post('/login', async (req, res) => {
    const { username, password } = req.body
    const user = User.findOne({ username });
    if (user) {
        const validpassword = await bcrypt.compare(password, user.password)
        if (!validpassword) return res.status(401).json({ message: "invalid password" })
        const token = jwt.sign({ id: user?.UserID, username: user.username }, "123", { expiresIn: "2h" })
        res.json({ token })
    } else {
        res.status(401).json({ message: "Invalid User" })
    }
})
router.get("/tasks", async (req, res) => {
    try {
        const tasks = await Task.find()
        res.json(tasks)
    } catch (error) {
        res.status(500).json({ message: error.message })

    }
})



module.exports = router