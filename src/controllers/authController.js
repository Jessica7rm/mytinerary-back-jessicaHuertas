const { verifyPassword } = require("../middlewares/auth")
const User = require("../models/User")

const register = async (req, res) => {
    try {
        const payload = req.body
        const userExists = await User.findOne({ email: payload.email })

        if (userExists) {
            return res.status(403).json({ massage: "User already exists" })
        }
        const userCreate = await User.create(payload)

        res.status(200).json({
            message: "User created successfully",
            userCreate
        })

    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

const login = async (req, res) => {
    try {
        const { password, email } = req.body
        const userFounded = await User.findOne({ email: email})
 
        if(userFounded){
 
            if(verifyPassword(password, userFounded.password)){
               return res.status(200).json({ message: "successfully logged in", user: userFounded})
            }else{
               return res.status(400).json({ message: "wrong password"})
            }

        }else{
            res.status(400).json({ message: "user not found" })
        }
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

module.exports = { register, login }