import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import db from '../models/index.js'; // Ensure this path is correct

dotenv.config();

const app = express();
const port = 3000;

// Enable CORS for all routes
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Example endpoint
app.get('/api/home', (req, res) => {
  res.json({ message: 'This is a homepage' });
});

app.get('/api/mission', (req, res) => {
  res.json({ message: 'This is our mission' });
});

// Sync Sequelize models and start the server
db.sequelize.sync().then(() => {
  console.log('Database & tables created!');
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
});