// Auth Service
const authService = require('../../services/auth.service');

const logout = async (req, res) => {

    try {

        return res.send(response);
    } catch (error) {
        return res.status(400).json(error);
    }
};

module.exports = { logout };