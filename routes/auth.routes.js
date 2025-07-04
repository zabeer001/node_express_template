import { Router } from "express";


import { signUp ,login  } from "../controllers/auth.controller.js";
import upload from "../helpers/multer.js";


const authRouter = Router();

// login
authRouter.post('/login', upload.array('photos', 3), login);

// signup
authRouter.post('/sign-up', upload.none(), signUp);

// authRouter.get('/logout', logout);


export default authRouter;