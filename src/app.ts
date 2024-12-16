import express, { Application } from 'express';
import cors from 'cors';
import { ProductRoute } from './app/modules/product/product.route';
const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

//  application  routes
app.use('/api', ProductRoute);

export default app;
