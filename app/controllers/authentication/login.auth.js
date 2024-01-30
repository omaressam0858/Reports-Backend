import { User } from "../../models/index.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { JWT_SECRET } from "../../config.js";
import loginSchema from "../../utils/validations/login.validation.js";

export default async function loginController(req, res, next) {
    try{
        const {email, password} = req.body;
        const {error} = loginSchema.validate(req.body);
        if(error) return res.status(400).json({message: error.message});

        const user = await User.findOne({where: {email}});
        if(!user) return res.status(404).json({message: "User not found"});

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(400).json({message: "Invalid credentials"});

        const token = jwt.sign({id: user.id}, JWT_SECRET, {expiresIn: '1d'});
        res.status(200).json({token});
    }catch(err){
        next(err)
    }
}