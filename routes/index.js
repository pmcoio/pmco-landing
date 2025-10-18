import express from 'express';
import { renderLanding, submitEmail } from '../controllers/landingController.js';
import validateEmail from '../middleware/validateEmail.js';

const router = express.Router();

// Landing page
router.get('/', renderLanding);

// API endpoint to handle main email submission
router.post('/api/email', validateEmail, submitEmail);

// TODO: Add routes for secondary email modal or additional modals

export default router;
