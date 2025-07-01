import { getAllUsers } from '../services/users/user.service.js';

export const index = async (req, res) => {

    try {
        // const age = req.query.age; get something from param
        const users = await getAllUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};