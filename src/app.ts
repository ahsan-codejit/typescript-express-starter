import express from 'express';
import * as bodyParser from 'body-parser';
import routes from './routes/index';

const app: express.Application = express();

app.use(bodyParser.json())
routes(app);

export default app;