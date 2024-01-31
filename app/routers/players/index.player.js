import {Router} from 'express';
import { postReport, getPlayerReports } from '../../controllers/players/reports.player.js';
import getPlayerTeam from '../../controllers/players/teams.player.js';


import verifyMiddleware from '../../middlewares/authentication/verify.auth.js';


const playerRouter = Router();

playerRouter.use(verifyMiddleware)

playerRouter.post('/reports', postReport)
playerRouter.get('/reports', getPlayerReports)

playerRouter.get('/team', getPlayerTeam)

export default playerRouter