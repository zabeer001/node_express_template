import User from "../../models/user.model.js";


export const getAllUsers = async () => {
  try {
    const users = await User.find().select('-password');
    return users;
  } catch (error) {
    throw new Error('Failed to fetch users');
  }
};