import express from 'express';
import protectRoute from '../middleware/protectRoute.js';
import { getUsersForSiderbar } from '../controllers/userController.js';
const router = express.Router();

router.get('/',protectRoute,getUsersForSiderbar)

export default router