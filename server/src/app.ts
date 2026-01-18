import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import apiRoutes from './routes/api'

const app: Application = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use('/api', apiRoutes);

// Routes
app.get('/', (req: Request, res: Response) => {
    res.status(200).send('Server is running!');
});

export default app;