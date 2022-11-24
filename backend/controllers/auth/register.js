// Service
const authService = require('../../services/auth.service');

const register = async (req, res) => {

    const data = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        confirm_password: req.body.confirm_password
    };

    try {
        if (!data.name) {
            return res.status(400).json({ msg: 'Please Enter Name' });
        }

        if (!data.email || !data.password) {
            return res.status(400).json({ msg: 'Please Enter Email and Password' });
        }

        if (data.password.length < 6) {
            return res.status(400).json({ msg: 'Please Enter Password with 6 minimum characters' });
        }

        if (data.password !== data.confirm_password) {
            return res.status(400).json({ msg: "Passwords do match" });
        }

        const response = await authService.register(data);

        return res.send(response);
    } catch (error) {
        return res.status(400).json({ msg: error });
    }
};

module.exports = { register };