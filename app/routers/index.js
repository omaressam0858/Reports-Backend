import {Router} from 'express';
import authRouter from './authentication/index.auth.js';

const mainRouter = Router();

mainRouter.use('/auth', authRouter)

export default mainRouter