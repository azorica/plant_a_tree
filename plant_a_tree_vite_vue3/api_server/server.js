import express from 'express';
import cors from 'cors';

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

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});