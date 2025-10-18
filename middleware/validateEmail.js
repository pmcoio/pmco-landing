export default function validateEmail(req, res, next) {
  const { email } = req.body;
  // Basic email format validation
  if (!email || !/\S+@\S+\.\S+/.test(email)) {
    return res.status(400).json({ success: false, error: 'Invalid email' });
  }
  next();
}
