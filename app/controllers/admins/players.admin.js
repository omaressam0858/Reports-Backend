import { User,Team } from "../../models/index.js";
import { Op } from "sequelize";

async function getAllPlayers(req,res,next){
    try{
        const players = await User.findAll({
            where:{
                roleId: {[Op.ne]: 2}
            },order: [
                ['teamId', 'DESC']
            ],
            include: {model: Team}
        });
        res.json(players);
    }catch(err){
        next(err)
    }
}

async function removePlayer (req,res,next) {
    try {
        const {id} = req.params;
        const player = await User.findOne({
            where: {
                id
            }
        });
        if(!player) return res.status(404).json({message: "Player not found"});
        await player.destroy();
        res.json({message: "Player deleted successfully"});
    }
    catch(err){
        next(err)
    }
}

async function getSinglePlayer(req,res,next){
    try{
        const {id} = req.params;
        const player = await User.findOne({
            where:{
                id
            },
            include: {model: Team}
        });
        if(!player) return res.status(404).json({message: "Player not found"});
        res.json(player);
    }catch(err){
        next(err)
    }
}

export {getAllPlayers,getSinglePlayer,removePlayer}