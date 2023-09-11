const Joi = require('joi');

const userSchema = Joi.object({
    name: Joi.string().min(3).max(20).required(),
    lastname: Joi.string().min(3).max(20).required(),
    email: Joi.string().email().required().messages({
        'string.email': "Please enter an valid email",
        'string.empty': "Please enter your email",
        'any.required': "Please enter your email",
    }),
    password: Joi.string().alphanum().min(6).max(15).required().messages({
        'string.password': "Please enter an valid password",
        'string.empty': "Please enter your password",
        'string.min': "The password required a minimum of 6 characters",
        'string.max': "Maximum 15 characters", 
        'any.required': "Please enter your password",
    }),
    url_img: Joi.string().required(),
    country: Joi.string().required().min(3).max(20),
});

const verifyAuthData = (req, res, next) => {
    const payload = req.body;
    const userValidated = userSchema.validate(payload, {abortEarly: false});

    if (userValidated.error) {
        return res.status(400).json({ message: userValidated.error.details.map((err) => err.message)})
    }

    next()
};

module.exports = {
    verifyAuthData
}