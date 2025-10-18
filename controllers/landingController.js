import { sendToMake } from '../utils/api.js';

export const renderLanding = (req, res) => {
  // TODO: Pass any dynamic data if needed (modals, video URLs)
  res.render('index', { title: 'PMCO Landing Page' });
};

export const submitEmail = async (req, res) => {
  const { email } = req.body;

  // TODO: Add any server-side validation if needed

  try {
    // TODO: Call Make.com API to send email
    await sendToMake(email);

    // TODO: Send success response to frontend
    res.json({ success: true });
  } catch (err) {
    // TODO: Improve error handling and logging
    res.status(500).json({ success: false, error: err.message });
  }
};
