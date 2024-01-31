import {Router} from 'express';
import authRouter from './authentication/index.auth.js';
import adminRouter from './admins/index.admin.js';
import playerRouter from './players/index.player.js';

const mainRouter = Router();

mainRouter.use('/auth', authRouter)
mainRouter.use('/admin', adminRouter)
mainRouter.use('/player', playerRouter)

export default mainRouter