
import { signUpService } from '../services/auth/signup.service.js';




export const signUp = async (req, res) => {
  try {
    const result = await signUpService(req.body); // just pass the request body
    return res.status(201).json({
      message: 'User registered successfully',
      ...result,
    });
  } catch (error) {
    console.error('Signup error:', error);
    return res.status(400).json({
      message: 'Signup failed',
      error: error.message,
    });
  }
};




export const login = async (req, res) => {
  try {

    return res.status(201).json({
      request: req.body,
        files: req.files,
    });
  } catch (error) {
    console.error('Signup error:', error);
    return res.status(400).json({
      message: 'Signup failed',
      error: error.message,
    });
  }
};



export const logout = async (req, res) => {
    res.send('logout');
}