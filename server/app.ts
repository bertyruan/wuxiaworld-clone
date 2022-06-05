import express, { Request, Response } from 'express';
const app = express();
import novelsRouter from './routes/novels.route';
const port = 3000;

app.get('/', function(req:Request, res:Response) {
  res.send('Hello Wuxiaworld Server 2!')
});

app.use('/novels', novelsRouter);

app.listen(port, function() {
  console.log(`Example app listening on port ${port}!`)
});