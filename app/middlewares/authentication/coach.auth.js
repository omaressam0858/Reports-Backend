export default async function coachMiddleware(req, res, next) {
    try{
        if(req.user.roleId < 1) 
            return res.status(403).json({message: "Forbidden"})
        next();
    }catch(err){
        next(err)
    }
}