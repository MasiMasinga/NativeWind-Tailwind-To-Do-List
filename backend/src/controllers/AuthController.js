const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const helper = require('../utils/Helper');
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
    return helper.handleError(err, req, res);
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

    const accessToken = jwt.sign({ id: user.id, name: user.name, email: user.email },
      process.env.JWT_SECRET, { expiresIn: 86400 }
    );

    const refreshToken = jwt.sign({ id: user.id, name: user.name, email: user.email },
      process.env.JWT_SECRET, { expiresIn: '7d' }
    );

    return res.status(200).json({ message: "User logged in successfully", accessToken: accessToken, refreshToken: refreshToken });
  } catch (error) {
    return helper.handleError(err, req, res);
  }
}

async function Logout(req, res) {

  try {
    return res.status(200).json({ message: "User logged out successfully" });
  } catch (error) {
    return helper.handleError(err, req, res);
  }

}

async function UpdatePassword(req, res) {

  try {

    let data = {
      current_password: req.body.current_password,
      new_password: req.body.new_password,
      confirm_password: req.body.confirm_password,
    };

    if (!data.current_password) {
      return res.status(400).json({ message: "Current password field is required" });
    }

    if (!data.new_password) {
      return res.status(400).json({ message: "New password field is required" });
    }

    if (data.new_password.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters" });
    }

    if (data.new_password !== data.confirm_password) {
      return res.status(400).json({ message: "Passwords do not match" });
    };

    const user = await prisma.user.findUnique({
      where: {
        id: req.params.id
      }
    });

    const validPassword = await bcrypt.compare(data.current_password, user.password);

    if (!validPassword) {
      return res.status(400).json({ message: "Invalid Password" });
    }

    const salt = await bcrypt.genSalt(10);
    hashedPassword = await bcrypt.hash(data.new_password, salt);

    const updatedUser = await prisma.user.update({
      where: {
        id: req.params.id
      },
      data: {
        password: hashedPassword
      }
    });

    return res.status(200).json({ message: "Password updated successfully", user: updatedUser});
  } catch (error) {
    return helper.handleError(err, req, res);
  }
}

async function UpdateName(req, res) {

  try {

    let data = {
      id: req.params.id,
      name: req.body.name,
    };

    if (!data.name) {
      return res.status(400).json({ message: "Name field is required" }); 
    };

    const updatedUserName = await prisma.user.update({
      where: {
        id: data.id
      },
      data: {
        name: data.name
      }
    });

    return res.status(200).json({ message: "Name updated successfully", user: updatedUserName });
  } catch (error) {
    return helper.handleError(err, req, res);
  }

}

async function UpdateEmail(req, res) {

  try {

    let data = {
      id: req.params.id,
      email: req.body.email,
    };

    if (!data.email) {
      return res.status(400).json({ message: "Email field is required" });
    };

    const updatedUserEmail = await prisma.user.update({
      where: {
        id: data.id
      },
      data: {
        email: data.email
      }
    });

    return res.status(200).json({ message: "Email updated successfully", user: updatedUserEmail });
  } catch (error) {
    return helper.handleError(err, req, res);
  }
}

async function DeleteAccount(req, res) {

  try {

    const deletedUser = await prisma.user.delete({
      where: {
        id: req.params.id
      }
    });

    return res.status(200).json({ message: "User deleted successfully", user: deletedUser });
  } catch (error) {
    return helper.handleError(err, req, res);
  };
}

module.exports = {
  Register,
  Login,
  Logout,
  UpdatePassword,
  UpdateName,
  UpdateEmail,
  DeleteAccount,
};
