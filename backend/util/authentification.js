const SECRET = process.env.SECRET;
import jwt from 'jsonwebtoken';
import { loggger } from "../utils/logger";

async function getUserID(req) {
    logger.info("token");
    console.log("token: ", req.headers.authorization);
    const token = req.headers.authorization
    if (typeof token !== undefined) {
        try {
            const { user } = await jwt.verify(token, SECRET);
            console.log("userID: ", user);
            return user;
        }
        catch (err){
            return { message: err.message }
        } 
    } else {
        console.log("TOKEN UNDEFINED");
        return null;
    }
}

module.exports = {
    SECRET,
    getUserID
}