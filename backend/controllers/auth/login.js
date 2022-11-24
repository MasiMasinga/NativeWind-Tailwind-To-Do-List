// Auth Service
const authService = require('../../services/auth.service');

const login = async (req, res) => {

    const data = {
        email: req.body.email,
        password: req.body.password,
    };

    try {

        // Validate Email & Password
        if (!data.email || !data.password) {
            return res.status(400).send(`Please Enter Email and Password`);
        }

        // // Validate Password Length
        if (data.password.length < 6) {
            return res.status(400).send(`Please Enter Password with 6 minimum characters`);
        }

        const response = authService.login(req.body);

        return res.send(response);
    } catch (error) {
        return res.status(400).json(error);
    }
};

module.exports = { login };