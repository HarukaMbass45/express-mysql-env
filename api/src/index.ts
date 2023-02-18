import express from 'express';
import type { Request, Response, NextFunction } from 'express';
const app: express.Express = express();

app.use(express.urlencoded({ extended: true }));

// CORS対応
app.use((req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

app.listen(3000, () => {
  console.log('API Sever is running...');
});

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('Hello Express!');
});
