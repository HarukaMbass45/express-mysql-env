import express from 'express';
import type { Request, Response, NextFunction } from 'express';
import { sampleRouter } from '@/src/infrastructure/router/sample-router';

const app: express.Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS対応
app.use((req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('Hello Express!');
});

app.use('/sample', sampleRouter());

app.listen(3000, () => {
  console.log('API Sever is running...');
});
