const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

async function Register(req, res) {

  try {
    
    let data = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      confirm_password: req.body.confirm_password,
    };

    if (!data.name) {
        return res.status(400).json({message: 'Name field is required' });
    };

    if (!data.email) {
        return res.status(400).json({  message: 'Email field is required' });
    };

    if (!data.password) {
        return res.status(400).json({ message: 'Password field is required'});
    };

    if (data.password.length < 6) {
        return res.status(400).json({ message: 'Password must be at least 6 characters' });
    }

    if (data.password !== data.confirm_password) {
      return res.status(400).json({ message: "Passwords do not match" });
    };

    const salt = await bcrypt.genSalt(10);
    hashedPassword = await bcrypt.hash(data.password, salt);

    const user = await prisma.user.findUnique({
        where: {
            email: data.email
        }
    });

    if (user) {
        return res.status(400).json({ message: "User already exists"});
    };

    const newUser = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: hashedPassword,
      },
    });

    return res.status(201).json({ message: "User created successfully", user: newUser });
  } catch (error) {
    return res.status(400).json({ message: "Something went wrong" });
  }
}

async function Login(req, res) {

  try {
        
    let data = {
        email: req.body.email,
        password: req.body.password,
    };

    if (!data.email) {
        return res.status(400).json({ message: "Email field is required" });
    };

    if (!data.password) {
        return res.status(400).json({ message: "Password field is required" });
    };

    const user = await prisma.user.findUnique({
        where: {
            email: data.email
        }
    });

    if (!user) {
        return res.status(400).json({ message: "User does not exist" });
    };

    const validPassword = await bcrypt.compare(data.password, user.password);

    if (!validPassword) {
        return res.status(400).json({ message: "Invalid Password" });
    };

    const token = jwt.sign({ id: user.id, name: user.name, email: user.email }, 
      process.env.JWT_SECRET, {expiresIn: 86400 }
    );

    return res.status(200).json({ message: "User logged in successfully", token: token });
  } catch (error) {
    return res.status(400).json({ message: "Something went wrong" });
  }
}

async function Logout(req, res) {

  try {

    return res.status(200).json({ message: "User logged out successfully" });

  } catch (error) {
    return res.status(400).json({ message: "Something went wrong" });
  }

}

async function UpdatePassword(req, res) {}

async function ForgotPassword(req, res) {}

async function UpdateName(req, res) {}

async function UpdateEmail(req, res) {}

async function DeleteAccount(req, res) {}

module.exports = {
  Register,
  Login,
  Logout,
  UpdatePassword,
  ForgotPassword,
  UpdateName,
  UpdateEmail,
  DeleteAccount,
};
