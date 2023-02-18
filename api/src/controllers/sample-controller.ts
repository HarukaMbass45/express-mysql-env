import express, { Router, Request, Response } from 'express';
import mysql from 'mysql2';

const router: Router = express.Router();
type SampleType = {
  name: string;
  detail: string;
};

const connection = mysql.createConnection({
  host: 'db',
  user: 'username',
  password: 'secret',
  database: 'express_mysql_template',
});

connection.connect((err: mysql.QueryError|null) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('connecting database is success');
});

router.get('/', (req: Request, res: Response) => {
  connection.query('SELECT * FROM `sample`', (err: mysql.QueryError, results: []) => {
    if (err) {
      console.error(err);
      return;
    }
    res.send(results);
  });
});

export default router;
