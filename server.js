import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import indexRouter from './routes/index.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// TODO: Add any additional middleware (CORS, logging, security headers, etc.)

// Set view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(process.cwd(), 'views'));

// Serve static files from public folder
app.use(express.static(path.join(process.cwd(), 'public')));

// Parse JSON and URL-encoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/', indexRouter);

// TODO: Add global error handler
// TODO: Handle 404 errors

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Open http://localhost:${PORT} to view PMCO Landing Page`);
});
