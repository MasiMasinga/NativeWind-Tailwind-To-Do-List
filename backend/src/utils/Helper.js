exports.handleError = (err, req, res) => {

    console.log(err);
    
    if (err.name === "UnauthorizedError") {
        return res.status(401).json({ message: "Invalid Token" });
    }
    
    if (err.name === "ValidationError") {
        return res.status(400).json({ message: err.message });
    }
    
    return res.status(500).json({ message: err.message });
}