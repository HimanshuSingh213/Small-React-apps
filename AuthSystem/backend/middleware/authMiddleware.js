import jwt from 'jsonwebtoken'

export async function authMiddleware(req, res, next) {
    try {
        // check for token sent from frontend
        const token = req.headers.authorization?.split(" ")[1];
        
        if(!token) return res.status(401).json({message: "Unauthorized access"})

        // verifying jwt token is correct and not expired
        const decodedData = jwt.verify(token, process.env.JWT_SECRET);

        console.log("decoded data:", decodedData);
        console.log("req.user: ",req.user);

        req.user = decodedData;

        next();
        
    } catch (err) {
        res.status(401).json({ message: "Invalid token" });
    }
}
