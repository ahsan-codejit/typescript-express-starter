
import express from "express";
import TodosApi from "../api/todos";
const todosApi = new TodosApi();

export default function todo(app: express.Application) {

    app.post('/todo/create', (req: express.Request, res: express.Response) => {
        res.json(todosApi.create(req.body))
    })

    app.get('/todo/list', (req: express.Request, res: express.Response) => {
        res.json(todosApi.findAll())
    })
};