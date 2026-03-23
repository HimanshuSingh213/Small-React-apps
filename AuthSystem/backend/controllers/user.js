import user from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const handleUserSignUp = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // checking if user already exists
        const existingUser = await user.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "user Already exists" });

        // hashing the password
        const hashedPassword = await bcrypt.hash(password, 12);

        // creating new user
        const newUser = await user.create({
            name,
            email,
            password: hashedPassword
        });

        return res.status(201).json({ message: "signed up successfully!!" })
    }
    catch (err) {
        return res.status(500).json({ message: "Error while creating User." })
    }
}

export const handleUserLogin = async (req, res) => {
    try {
        const {email, password} = req.body;

         // checking if user exists or not
         const existingUser = await user.findOne({ email }).lean();
         if (!existingUser) return res.status(404).json({ message: "User not found" });

        //  checking the password
        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if(!isPasswordCorrect) return res.status(400).json({message: "Invalid email/password"})

        // generating token that will be saved by frontend in localstorage
        const token = jwt.sign({id: existingUser._id }, process.env.JWT_SECRET, {expiresIn: "2h"});

        return res.status(200).json({token, message: "Logged in successfully!!"})

    } catch (err) {
        res.status(500).json({ message: "Error while logging in" });
    }
}