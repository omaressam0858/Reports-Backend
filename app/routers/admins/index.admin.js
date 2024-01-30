import {Router} from 'express';

import { getAllPlayers, removePlayer } from '../../controllers/admins/players.admin.js';
import { getAllTeams, getSingleTeam ,addTeam, removeTeam } from '../../controllers/admins/teams.admin.js';

import verifyMiddleware from '../../middlewares/authentication/verify.auth.js';
import adminMiddleware from '../../middlewares/authentication/admin.auth.js';


const adminRouter = Router();

adminRouter.use(verifyMiddleware)
adminRouter.use(adminMiddleware)

adminRouter.get('/players', getAllPlayers)
adminRouter.delete('/players/:id', removePlayer)

adminRouter.get('/teams', getAllTeams)
adminRouter.get('/teams/:id', getSingleTeam)
adminRouter.post('/teams', addTeam)
adminRouter.delete('/teams/:id', removeTeam)



export default adminRouter