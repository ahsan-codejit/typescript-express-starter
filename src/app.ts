import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import routes from './routes';

class App {
    public app: Application;
    constructor() {
        this.app = express();
        this.config();
        routes(this.app);
    }

    private config(): void {
        dotenv.config();
        this.app.use(helmet());
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(bodyParser.json({ limit: '10mb' }));
        this.app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
    }
}
export default new App().app;