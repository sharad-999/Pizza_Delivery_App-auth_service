import express from 'express';
import { AuthController } from '../controller/AuthController';

const router = express.Router();
const authcontroller = new AuthController();

router.post('/register', (req, res) => authcontroller.register(req, res));

export default router;
