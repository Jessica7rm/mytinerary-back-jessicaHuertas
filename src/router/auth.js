const express = require('express')
const { register, login } = require('../controllers/authController')
const { verifyAuthData } = require('../middlewares/verifications')
const { hashPassword } = require('../middlewares/auth')

const authRouter = express.Router()

authRouter.post('/register', verifyAuthData, hashPassword ,register)
authRouter.post('/login', verifyAuthData, login)

const {getUser, getAllUsers, deleteUser, updateUser } = require('../controllers/userController')
authRouter.get("/:id", getUser)
authRouter.get("", getAllUsers)
authRouter.delete("/:id", deleteUser)
authRouter.put("/:id", hashPassword, updateUser)

module.exports = authRouter