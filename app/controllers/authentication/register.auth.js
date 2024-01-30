import { User } from "../../models/index.js";
import registerSchema from "../../utils/validations/register.validation.js";

export default async function registerController(req, res, next) {
    try{
        const {name,email,password,roleId,phoneNumber,gameUserName,teamId} = req.body;
        const {error} = registerSchema.validate(req.body);
        if(error) return res.status(400).json({message: error.message});

        const user = await User.create({name,email,password,roleId,phoneNumber,gameUserName,teamId});

        res.json(user);
    }catch(err){
        next(err)
    }
}