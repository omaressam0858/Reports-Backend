import joi from 'joi';

const loginSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required().min(8).max(32)
})

export default loginSchema;