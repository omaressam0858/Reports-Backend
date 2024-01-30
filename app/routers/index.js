import {Router} from 'express';
import authRouter from './authentication/index.auth.js';
import adminRouter from './admins/index.admin.js';

const mainRouter = Router();

mainRouter.use('/auth', authRouter)
mainRouter.use('/admin', adminRouter)

export default mainRouter