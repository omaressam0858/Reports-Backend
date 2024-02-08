import joi from 'joi';

const loginSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required().min(8).max(32),
    newPassword: joi.string().min(8).max(32)
})

const firstLoginSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required().min(8).max(32),
    newPassword: joi.string().required().min(8).max(32)
})
export {loginSchema, firstLoginSchema};