// Prisma
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const login = (params) => {
    return new Promise(async (resolve, reject) => {
        try {

            const user = await prisma.user.findUnique({
                where: {
                    email: params.email
                }
            });

            if (!user) {
                return res.status(400).send(`User Does Not Exist`);
            };

            const isMatch = await bcrypt.compare(password, user.password);

            if (!isMatch) {
                return res.status(400).send(`Invalid Credentials`);
            };

            const payload = {
                user: {
                    id: user.id,
                    email: user.email,
                }
            };

            const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 360000 });

            return resolve({ user, token });
        } catch (err) {
            return reject(err)
        }
    })
};

const register = (params) => {
    return new Promise(async (resolve, reject) => {
        try {

            const user = await prisma.user.findUnique({
                where: {
                    email: params.email
                }
            });

            if (user) {
                return res.status(400).send(`User Already Exists`);
            };

            const salt = bcrypt.genSaltSync(10);
            const hashpass = bcrypt.hashSync(params.password, salt);

            const newUser = await prisma.user.create({
                data: {
                    name: params.name,
                    email: params.email,
                }
            });

            return resolve(newUser);
        } catch (err) {
            return reject(err)
        }
    })
};

const resetPassword = (params) => {
    return new Promise(async (resolve, reject) => {

        try {

            const user = await prisma.user.findUnique({
                where: {
                    email: params.email
                }
            });

            if (!user) {
                return res.status(400).send(`User Does Not Exist`);
            };

            const salt = bcrypt.genSaltSync(10);
            const hashpass = bcrypt.hashSync(params.password, salt);

            const updatedUser = await prisma.user.update({
                where: {
                    id: user.id
                },
                data: {
                    password: hashpass
                }
            });

            return resolve(updatedUser);
        } catch (err) {
            return reject(err)
        }

    });
};

const forgotPassword = (params) => { };

const updateEmail = (params) => {
    return new promise(async (resolve, reject) => {
        try {

            const user = await prisma.user.findUnique({
                where: {
                    id: params.id
                }
            });

            if (!user) {
                return res.status(400).send(`User Does Not Exist`);
            };

            const updatedUser = await prisma.user.update({
                where: {
                    id: user.id
                },
                data: {
                    email: params.email
                }
            });

            return resolve(updatedUser);
        } catch (err) {
            return reject(err)
        }
    });
};

const updatePassword = (params) => {
    return new Promise(async (resolve, reject) => {

        try {

            const user = await prisma.user.findUnique({
                where: {
                    id: params.id
                }
            });
            const salt = bcrypt.genSaltSync(10);
            const hashpass = bcrypt.hashSync(params.password, salt);

            const updatedUser = await prisma.user.update({
                where: {
                    id: user.id
                },
                data: {
                    password: hashpass
                }
            });

            return resolve(updatedUser);
        } catch (err) {
            return reject(err)
        }
    });
};

const updateName = (params) => {
    return new Promise(async (resolve, reject) => {

        try {

            const user = await prisma.user.findUnique({
                where: {
                    id: params.id
                }
            });

            if (!user) {
                return res.status(400).send(`User Does Not Exist`);
            };

            const updatedUser = await prisma.user.update({
                where: {
                    id: user.id
                },
                data: {
                    name: params.name
                }
            });

            return resolve(updatedUser);
        } catch (err) {
            return reject(err)
        }
    });
};

module.exports = {
    login,
    register,
    resetPassword,
    forgotPassword,
    updateEmail,
    updatePassword,
    updateName,
};