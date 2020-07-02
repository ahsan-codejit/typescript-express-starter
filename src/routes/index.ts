import express from "express";
import todo from './todo';

export default function routes(app: express.Application) {
    app.get('/', (req: express.Request, res: express.Response) => {
        res.json({ "body": "Hello Boilerplate" });
    });
    todo(app);
}