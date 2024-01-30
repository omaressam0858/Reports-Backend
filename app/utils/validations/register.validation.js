import joi from 'joi';

const registerSchema = joi.object({
    name: joi.string().required().min(3).max(32),
    email: joi.string().email().required(),
    password: joi.string().required().min(8).max(32),
    phoneNumber: joi.string().required().min(5).max(15),
    gameUserName: joi.string().required().min(3).max(32),
    roleId: joi.number().required().min(0).max(1),
    teamId: joi.number().required()
})

export default registerSchema;