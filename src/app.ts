import express, { Application } from 'express';
import cors from 'cors';
import { ProductRoute } from './app/modules/product/product.route';
import { OrderRouter } from './app/modules/order/order.route';
const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

//  application  routes
app.use('/api', ProductRoute);
app.use('/api', OrderRouter);

export default app;
