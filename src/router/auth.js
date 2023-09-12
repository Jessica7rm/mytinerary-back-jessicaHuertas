const express = require('express')
const { register, login, authenticated, logout } = require('../controllers/authController')
const { verifyAuthData } = require('../middlewares/verifications')
const { hashPassword, verifyUserExists, verifyPassword, generateToken, passportVerificator } = require('../middlewares/auth')

const authRouter = express.Router()

authRouter.post('/register', verifyAuthData, hashPassword , generateToken, register)
authRouter.post('/login', verifyUserExists, verifyPassword, generateToken, login)
authRouter.post('/authenticated', passportVerificator.authenticate("jwt", {session: false}) , generateToken, authenticated)
//authRouter.post('/logout', passportVerificator.authenticate("jwt", {session: false}), logout)

const {getUser, getAllUsers, deleteUser, updateUser } = require('../controllers/userController')
authRouter.get("/:id", getUser)
authRouter.get("", getAllUsers)
authRouter.delete("/:id", deleteUser)
authRouter.put("/:id", hashPassword, updateUser)

module.exports = authRouter