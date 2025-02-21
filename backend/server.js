import express from 'express';
import dotenv from 'dotenv';
import { errorHandler } from './middleware/errorMiddleware.js';
import goalsRoutes from './routes/goalsRoutes.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/goals', goalsRoutes);
app.use(errorHandler);
app.listen(port, () => console.log(`Server started on port ${port}`));
