import {Router} from 'express';
import authRouter from './authentication/index.auth.js';
import adminRouter from './admins/index.admin.js';
import playerRouter from './players/index.player.js';
import coachRouter from './coachs/index.coach.js';

const mainRouter = Router();

mainRouter.use('/auth', authRouter)
mainRouter.use('/admin', adminRouter)
mainRouter.use('/player', playerRouter)
mainRouter.use('/coach', coachRouter)


mainRouter.use('/version' ,(req, res) => res.send('1.0.0'))
export default mainRouter