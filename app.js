
import express from 'express';
import { PORT, NODE_ENV } from './config/env.js';
import connectTODatacase from './database/mongodb.js';
import User from './models/user.model.js';


const app = express();

app.get('/', (req, res) => {
  res.send(`app is running on http://localhost:${PORT}`);
});

app.get('/users', async (req, res) => {
  try {
    const users = await User.find();  // Fetch all users
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

console.log(PORT);


app.listen(PORT, async () => {
    console.log(`http://localhost:${PORT}`);
    await connectTODatacase();
});

export default app;