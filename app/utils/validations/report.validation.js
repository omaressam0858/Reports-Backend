import joi from 'joi';

const reportSchema = joi.object({
    title: joi.string().required().min(3).max(64),
    description: joi.string().required().min(3).max(1024)
})

export default reportSchema;