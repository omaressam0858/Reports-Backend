import {Router} from 'express';

import { getAllPlayers,getSinglePlayer, removePlayer } from '../../controllers/admins/players.admin.js';
import { getAllTeams, getSingleTeam ,addTeam, removeTeam } from '../../controllers/admins/teams.admin.js';
import {getAllReports,getSingleReport,acceptReport,rejectReport} from '../../controllers/admins/reports.admin.js';
import verifyMiddleware from '../../middlewares/authentication/verify.auth.js';
import adminMiddleware from '../../middlewares/authentication/admin.auth.js';


const adminRouter = Router();

adminRouter.use(verifyMiddleware)
adminRouter.use(adminMiddleware)

adminRouter.get('/players', getAllPlayers)
adminRouter.get('/players/:id', getSinglePlayer)
adminRouter.delete('/players/:id', removePlayer)

adminRouter.get('/teams', getAllTeams)
adminRouter.get('/teams/:id', getSingleTeam)
adminRouter.post('/teams', addTeam)
adminRouter.delete('/teams/:id', removeTeam)

adminRouter.get('/reports', getAllReports)
adminRouter.get('/reports/:id', getSingleReport)
adminRouter.post('/reports/:id/accept', acceptReport)
adminRouter.post('/reports/:id/reject', rejectReport)   



export default adminRouter