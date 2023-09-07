const Joi = require('joi');

const userSchema = Joi.object({
    name: Joi.string().required(),
    lastname: Joi.string().required(),
    email: Joi.string().email().required().messages({
        'string.email': "Please enter an valid email",
        'string.empty': "Please enter your email",
        'any.required': "Please enter your email",
    }),
    password: Joi.string().alphanum().min(6).max(15).required(),
    url_img: Joi.string().required(),
    country: Joi.string().required(),
});

const verifyAuthData = (req, res, next) => {
    const payload = req.body;
    const userValidated = userSchema.validate(payload);

    if (userValidated.error) {
        return res.status(400).json({ message: userValidated.error.details.map((err) => err.message)})
    }

    next()
};

module.exports = {
    verifyAuthData
}