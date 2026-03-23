import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import { authMiddleware } from "./middleware/authMiddleware.js";
import dotenv from "dotenv";
import dbConnect from "./lib/db.js";

// loading env variables
dotenv.config();


const app = express();
app.use(cors());
app.use(express.json());

app.use("/", authRoutes);

app.get("/dashboard", authMiddleware, (req, res) => {
    res.json({ message: "Welcome to dashboard", user: req.user });
});

dbConnect()
    .then(() => {
        console.log("DB Connected Successfully.");

        app.listen(19400, () => {
            console.log('The Server is running on: 19400');
        });
    })
    .catch((err) => {
        console.error("Failed to connect to DB.", err);

    })