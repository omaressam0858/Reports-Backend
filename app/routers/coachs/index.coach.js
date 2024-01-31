import {Router} from 'express';

import {getTeamReport,getSingleReport,acceptReport,rejectReport} from '../../controllers/coachs/reports.coach.js';
import getCoachTeam from '../../controllers/coachs/teams.coach.js';

import verifyMiddleware from '../../middlewares/authentication/verify.auth.js';
import coachMiddleware from '../../middlewares/authentication/coach.auth.js';

const coachRouter = Router();

coachRouter.use(verifyMiddleware)
coachRouter.use(coachMiddleware)

coachRouter.get('/team', getCoachTeam)

coachRouter.get('/reports', getTeamReport)
coachRouter.get('/reports/:id', getSingleReport)
coachRouter.put('/reports/:id/accept', acceptReport)
coachRouter.put('/reports/:id/reject', rejectReport)

export default coachRouter