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
            token: req.token,
            userCreate
        })

    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

const login = async (req, res) => {
    try {
        res.status(200).json({
            message: 'Successfully logged in',
            token: req.token,
            user: {
                name: req.user.name,
                lastname: req.user.lastname,
                email: req.user.email,
                url_img: req.user.url_img,
                country: req.user.country,
                _id: req.user._id,
                
            }
        })
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

const authenticated = async (req, res) => {
    try {
        res.status(200).json({
            message: 'Successfully authenticated',
            token: req.token,
            user: {
                name: req.user.name,
                lastname: req.user.lastname,
                email: req.user.email,
                url_img: req.user.url_img,
                country: req.user.country,
            }
        })
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

const logout = async (req, res) => {
    try {

        res.status(200).json({ message: 'logged out', token: req.token })

    } catch (err) {
        res.status(500).json({ message: console.log(err.massage) })
    }
}

module.exports = { register, login, authenticated, logout }