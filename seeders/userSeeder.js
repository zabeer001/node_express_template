import User from '../models/user.model.js';
import { hashMultiplePasswords } from '../helpers/index.js';

const generateUsers = () => {
  const users = [
    {
      "_id": "68637e46c62fca563bed6dff",
      "name": "Admin User",
      "email": "binzabirtareq@gmail.com",
      "password": "12345678",

    },
  ];
  for (let i = 1; i <= 100; i++) {
    users.push({
      name: `User ${i}`,
      email: `user${i}@example.com`,
      password: `password${i}`,
      role: i === 1 ? 'admin' : 'user'
    });
  }
  return users;
};

const userSeeder = async () => {
  await User.deleteMany({});
  console.log('Existing users deleted');

  let users = generateUsers();
  let hashedUsers = await hashMultiplePasswords(users);
  await User.insertMany(hashedUsers);
  console.log('Users seeded successfully');
};

export default userSeeder;
