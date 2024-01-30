export default async function adminMiddleware(req, res, next) {
    try{
        if(req.user.roleId !== 2) 
            return res.status(403).json({message: "Forbidden"})
        next();
    }catch(err){
        next(err)
    }
}