import {User, Team , Report} from "../../models/index.js";

async function getTeamReport(req,res,next){
    try{
        const reports = await Report.findAll({
            include: [
                {model: Team},
                {model: User, as: "responder"}
            ],
            where:{
                teamId: req.user.teamId
            }
        });
        res.json(reports);
    }catch(err){
        next(err)
    }
}

async function getSingleReport(req,res,next){
    try{
        const {id} = req.params;
        const report = await Report.findOne({
            where:{
                id
            },
            include: [
                {model: Team},
                {model: User, as: "responder"}
            ]
        });
        if(!report) return res.status(404).json({message: "Report not found"});
        res.json(report);
    }catch(err){
        next(err)
    }
}

async function acceptReport(req,res,next){
    try{
        const {id} = req.params;
        const report = await Report.findOne({
            where:{
                id
            }
        });
        if(!report) return res.status(404).json({message: "Report not found"});
        report.status = 1;
        report.responderId = req.user.id;
        await report.save();
        res.json(report);
    }catch(err){
        next(err)
    }
}

async function rejectReport(req,res,next){
    try{
        const {id} = req.params;
        const report = await Report.findOne({
            where:{
                id
            }
        });
        if(!report) return res.status(404).json({message: "Report not found"});
        report.status = 2;
        report.responderId = req.user.id;
        await report.save();
        res.json(report);
    }catch(err){
        next(err)
    }
}

export {getTeamReport,getSingleReport,acceptReport,rejectReport}