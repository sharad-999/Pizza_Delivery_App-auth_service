import express from 'express';
import { AuthController } from '../controller/AuthController';
import { UserService } from '../services/UserService';
import { User } from '../entity/User';
import { AppDataSource } from '../config/data-source';

const router = express.Router();
const userRepository = AppDataSource.getRepository(User);
const userService = new UserService(userRepository);
const authcontroller = new AuthController(userService);

router.post('/register', (req, res) => authcontroller.register(req, res));

export default router;
