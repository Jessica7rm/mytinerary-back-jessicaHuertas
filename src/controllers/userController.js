const User = require("../models/User")

const getUser = async (req, res) => {
    try {
        let { id } = req.params
        let user = await User.findById(id)
        res.status(200).json({ user })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const getAllUsers = async (req, res) => {
    const query = {}
    try {
        let users = await User.find(query)
        res.status(200).json({ users })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

// In auth controller there are the controllers to register and login

const updateUser = async (req, res) => {
    try {
        let newData = {
            name: req.body.name,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password,
            url_img: req.body.url_img,
            country: req.body.country
        }
        const { id } = req.params
        await User.findByIdAndUpdate(id, newData)

        res.status(201).json({
            message: "User has been update",
            newData
        })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params
        await User.findByIdAndDelete(id)

        res.status(201).json({
            message: "User has been delete",
        })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

module.exports = { getUser, getAllUsers , deleteUser, updateUser }