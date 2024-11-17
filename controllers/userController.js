const users = require('../models/userModel')
const jwt = require('jsonwebtoken')

// register
exports.userRegisterController = async (req, res) => {
    console.log("inside registercontroller");
    console.log(req.body);
    const { name, email, phnno, password } = req.body
    try {
        const existingUser = await users.findOne({ email })
        if (existingUser) {
            res.status(406).json("Alredy existing user... Please login!!!")
        } else {
            const newUsers = new users({
                name, email, phnno, password
            })
            await newUsers.save()
            res.status(200).json(newUsers)
        }
    } catch (error) {
        res.status(401).json(error)
    }
}

// login
exports.userLoginController = async (req, res) => {
    console.log("inside Login Controller");
    console.log(req.body);
    const { email, password } = req.body
    try {
        const existingUser = await users.findOne({ email, password })
        if (existingUser) {
            // token generation
            const token = jwt.sign({ userId: existingUser._id }, process.env.JWTPASSWORD)
            res.status(200).json({ users: existingUser,token })
        } else {
            res.status(406).json("Inavlid Email / Password")
        }
    } catch (error) {
        res.status(401).json(error)
    }
}

