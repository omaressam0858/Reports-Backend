import {Report,Team,User} from "../../models/index.js";
import reportSchema from "../../utils/validations/report.validation.js";

async function postReport(req,res,next){
    try{
        const user = req.user;
        const {error} = reportSchema.validate(req.body);
        if(error) return res.status(400).json({message: error.message});
        const {title,description} = req.body;
        const report = await Report.create({title,description,userId:user.id,teamId:user.Team.id});
        res.json(report);
    }catch(err){
        next(err)
    }
} 

async function getSingleReport(req,res,next){
    const user = req.user;
    const {reportId} = req.params;
    try{
        const report = await Report.findOne(
            {
                where:{id:reportId,userId:user.id},
                include: [
                    {model: Team},
                    {model: User, as: "responder" , attributes: ['name','gameUserName','email','roleId']},
                    {model: User, as: "user" , attributes: ['name','gameUserName','email','roleId']}
                ]
            }
        );
        res.json(report);
    }
    catch(err){
        next(err)
    }
}

async function getPlayerReports(req,res,next){
    const user = req.user;
    try{
        const reports = await Report.findAll(
            {
                where:{userId:user.id},
                include: [
                    {model: Team},
                    {model: User, as: "responder" , attributes: ['name','gameUserName','email','roleId']},
                ]
            }
        );
        res.json(reports);
    }catch(err){
        next(err)
    }
}


export {postReport,getSingleReport , getPlayerReports}