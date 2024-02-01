import { User,Team } from "../../models/index.js";
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from "../../config.js";

export default async function verifyMiddleware(req, res, next) {
    try{
        const token = req.headers.Authorization;
        if(!token) return res.status(401).json({message: "Unauthorized"});
        const decoded = jwt.verify(token, JWT_SECRET);
        const user = await User.findByPk(decoded.id,
            {
                include: {model: Team}
            });
        if(!user) return res.status(404).json({message: "User not found"});
        req.user = user;
        next();
    }catch(err){
        if(err.name === "JsonWebTokenError") return res.status(401).json({message: "Unauthorized"});
        next(err)
    }
}