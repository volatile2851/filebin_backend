import express from 'express';
import routes from './routes/route.js'
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use('/', routes);


app.listen(process.env.port, () => console.log('server started successfully'));