import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/", authRoutes);

app.get("/dashboard", authMiddleware, (req, res) => {
    res.json({ message: "Welcome to dashboard", user: req.user });
})

app.listen(19400, () => {
    console.log('The Server is running on: 19400');
});