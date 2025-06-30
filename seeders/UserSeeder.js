import mongoose from 'mongoose';
import { DB_URI } from '../config/env.js';
import User from '../models/user.model.js';

const users = [
  { name: 'Admin User', email: 'admin@example.com' },
  { name: 'John Doe', email: 'john@example.com' },
  { name: 'Jane Smith', email: 'jane@example.com' ,password: 'password123'},
];

const runSeeder = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log('Connected to MongoDB');

    // Optional: clear existing users
    await User.deleteMany({});
    console.log('Existing users deleted');

    // Insert seed users
    await User.insertMany(users);
    console.log('Users seeded successfully');

    process.exit(0);
  } catch (error) {
    console.error('Error in seeding users:', error);
    process.exit(1);
  }
};

runSeeder();
