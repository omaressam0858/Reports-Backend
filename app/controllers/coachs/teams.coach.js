import {User, Team} from "../../models/index.js";

async function getCoachTeam(req,res,next){
    try{
        const {id} = req.user.Team;
        const team = await Team.findOne({
            where:{
                id
            },
            include: {model: User , attributes: ['name','gameUserName','email','roleId']},
        });
        if(!team) return res.status(404).json({message: "Team not found"});
        res.json(team);
    }
    catch(err){
        next(err)
    }
}

export default getCoachTeam;