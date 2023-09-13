const Joi = require('joi');

const userSchema = Joi.object({
    name: Joi.string().min(3).max(20).required().messages({
        'string.empty': "Please enter your name",
        'string.min': "The name required a minimum of 3 characters",
        'string.max': "The name maximum 20 characters",
    }),
    lastname: Joi.string().min(3).max(20).required().messages({
        'string.empty': "Please enter your name",
        'string.min': "The last name required a minimum of 3 characters",
        'string.max': "The last name maximum 20 characters",
    }),
    email: Joi.string().email().required().messages({
        'string.email': "Please enter an valid email",
        'any.required': "Please enter your email",
    }),
    password: Joi.string().alphanum().min(6).max(30).required().messages({
        'string.password': "Please enter an valid password",
        'string.empty': "Please enter your password",
        'string.min': "The password required a minimum of 6 characters",
        'string.max': "Maximum 30 characters", 
    }),
    url_img: Joi.string().required().uri().messages({
        'string.empty': "Please enter your photo",
        'string.uri': "Enter the image in url format",
        'any.required': "Please enter your photo",
    }),
    country: Joi.string().required().min(3).max(40).messages({
        'string.empty': "Please select one country",
    }),
});

const loginSchema = Joi.object({
    email: Joi.string().email().required().messages({
        'string.email': "Please enter an valid email",
        'string.empty': "Please enter your email",
        'any.required': "Please enter your email",
    }),
    password: Joi.string().alphanum().min(6).max(30).required().messages({
        'string.password': "Please enter an valid password",
        'string.empty': "Please enter your password",
        'string.min': "The password required a minimum of 6 characters",
        'string.max': "Maximum 30 characters", 
        'any.required': "Please enter your password",
    })
});

const verifyAuthData = (req, res, next) => {
    const payload = req.body;
    const userValidated = userSchema.validate(payload, {abortEarly: false});

    if (userValidated.error) {
        return res.status(400).json({ message: userValidated.error.details.map((err) => err.message)})
    }

    next()
};

const verifyDataLogin = (req, res, next) => {
    const payload = req.body
    const userValidated = loginSchema.validate(payload, {abortEarly: false});

    if (userValidated.error) {
        return res.status(400).json({ message: userValidated.error.details.map((err) => err.message)})
    }

    next()
};

module.exports = {
    verifyAuthData,
    verifyDataLogin
}