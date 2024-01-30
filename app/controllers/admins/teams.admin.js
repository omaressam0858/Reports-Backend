import { Team,User } from "../../models/index.js";

async function getAllTeams(req,res,next){
    try{
        const teams = await Team.findAll();
        res.json(teams);
    }catch(err){
        next(err)
    }
}

async function getSingleTeam(req,res,next){
    try{
        const {id} = req.params;
        const team = await Team.findOne({
            where:{
                id
            },
            include: {model: User}
        });
        if(!team) return res.status(404).json({message: "Team not found"});
        res.json(team);
    }catch(err){
        next(err)
    }
}

async function addTeam(req,res,next){
    try{
        const {teamName} = req.body;
        const team = await Team.create({teamName});
        res.json(team);
    }catch(err){
        next(err)
    }
}

async function removeTeam(req,res,next){
    try{
        const {id} = req.params;
        const team = await Team.findOne({
            where:{
                id
            }
        });
        if(!team) return res.status(404).json({message: "Team not found"});
        await team.destroy();
        res.json({message: "Team deleted successfully"});
    }catch(err){
        next(err)
    }
}
export {getAllTeams,getSingleTeam,addTeam,removeTeam}