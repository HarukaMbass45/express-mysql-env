import express from 'express';
import type { Request, Response, NextFunction } from 'express';
const app: express.Express = express();

type User = {
  id: number;
  name: string;
  email: string;
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS対応
app.use((req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

app.listen(3333, () => {
  console.log('Start on port 3333.');
})

const users: User[] = [
  { id: 1, name: 'User1', email: 'user01@test.local', },
  { id: 2, name: 'User2', email: 'user02@test.local', },
  { id: 3, name: 'User3', email: 'user03@test.local', },
];

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('Hello Express!');
});

app.get('/users', (req: Request, res: Response,) => {
  res.send(JSON.stringify(users));
});
