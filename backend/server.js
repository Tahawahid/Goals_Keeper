import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import { errorHandler } from './middleware/errorMiddleware.js';
import goalsRoutes from './routes/goalsRoutes.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/goals', goalsRoutes);
app.use(errorHandler);
app.listen(port, () => console.log(`Server started on port ${port}`));
