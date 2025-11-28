import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from 'cors';
import connectDB from "./config/mongodb.js";
import imageRouter from "./routes/imageRoutes.js";
import userRouter from "./routes/userRoutes.js";

const port = process.env.PORT || 4000;
const app = express();

// Middleware
app.use(express.json());

// CORS configuration - IMPORTANT FOR VERCEL FRONTEND
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Connect to MongoDB
await connectDB();

// Routes
app.use('/api/user', userRouter);
app.use('/api/image', imageRouter);

// Health check route
app.get('/', (req, res) => {
    res.send('API Working');
});

// Start server
app.listen(port, () => console.log(`Server started on PORT: ${port}`));