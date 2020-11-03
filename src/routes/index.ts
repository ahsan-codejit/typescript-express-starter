import { Application, Request, Response } from "express";
import todo from './todo';
import auth from './auth';

export default function routes(app: Application) {
    auth.route(app);
    todo.route(app);
    app.get('/api', (req: Request, res: Response) => {
        res.status(200).json({});
    });
    app.get('*', (req: Request, res: Response) => {
        res.status(404).json({ "message": "PageNotFound" });
    });
}