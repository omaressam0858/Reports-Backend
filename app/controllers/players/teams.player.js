import {User, Team} from "../../models/index.js";

async function getPlayerTeam(req,res,next){
    try{
        const id = req.user.teamId;
        const team = await Team.findOne({
            where:{
                id
            },
            include: {model: User}
        }); 
        if(!team) return res.status(404).json({message: "Team not found"});
        res.json(team);
    }
    catch(err){
        next(err)
    }
}

export default getPlayerTeam;