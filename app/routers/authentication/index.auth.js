import {Router} from 'express';
import loginController from '../../controllers/authentication/login.auth.js';
import registerController from '../../controllers/authentication/register.auth.js';


import verifyMiddleware from '../../middlewares/authentication/verify.auth.js';
import adminMiddleware from '../../middlewares/authentication/admin.auth.js';



const authRouter = Router();

authRouter.post('/login',loginController)
//  As it related to authentication,it is in auth folder not in admin folder
authRouter.post('/register',verifyMiddleware,adminMiddleware,registerController)


export default authRouter