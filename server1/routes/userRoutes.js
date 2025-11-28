// Copyright 2025 PREM
// Licensed under the Apache License, Version 2.0

import express from 'express'
import { registerUser, loginUser, userCredits } from '../controllers/userController.js';
import authUser from '../middlewares/auth.js';

const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.get('/credits', authUser, userCredits);

export default userRouter;
