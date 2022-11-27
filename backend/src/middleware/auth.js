const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');
dotenv.config();

const auth = (req, res, next) => {

    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};

module.exports = auth;

// const verifyToken = (req, res, next) => {

//   const token = req.body.token || req.query.token || req.headers["x-access-token"];

//   if (!token) {
//     return res.status(403).send("A token is required for authentication");
//   }

//   try {

//     const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
//     req.user = decoded;

//   } catch (err) {
//     return res.status(401).send("Invalid Token");
//   }
//   return next();
// };

// module.exports = verifyToken;

// const jwt = require("jsonwebtoken");
// const dotenv = require('dotenv');
// dotenv.config();

// const authenticateJWT = (req, res, next) => {

//     const authHeader = req.headers.authorization;

//     if (authHeader) {

//         const token = authHeader.split(' ')[1];

//         jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {

//             if (err) {
//                 return res.status(403).json({ msg: "Invalid Token" });
//             };

//             req.user = user;
//             next();
//         });

//     } else {
//         return res.status(401).json({ msg: "Unauthorized Token" });
//     };
// };

// module.exports = authenticateJWT;

// const jwt = require("jsonwebtoken");
// const dotenv = require("dotenv");
// dotenv.config();

// const auth = async (req, res, next) => {
//   try {
//     const token = req.headers.Authorization.split(" ")[1];

//     let decodedData;

//     if (token) {
//       decodedData = jwt.verify(token, process.env.JWT_SECRET);

//       res.locals.user = decodedtoken.id;
//     }
    
//     next();
//   } catch (error) {
//     return res.status(400).json({ msg: "Unauthorized Token" });
//   }
// };

// module.exports = auth;
