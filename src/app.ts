import express, { Application } from 'express';
import cors from 'cors';
import { ProductRoute } from './app/modules/product/product.route';
import { OrderRouter } from './app/modules/order/order.route';
const app: Application = express();

// parser
app.use(express.json());
app.use(cors());
app.use(express.static('public'));

//  application  routes
app.use('/api', ProductRoute);
app.use('/api', OrderRouter);
app.get('/', (req, res) => {
  res.send('assignment 2 product api run');
});

export default app;
