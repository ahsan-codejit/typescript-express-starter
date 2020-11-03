
import { Application, Request, Response } from "express";
import TodosApi from "../api/todos";
const todosApi = new TodosApi();

let route = (app: Application) => {
    app.get('/api/todo', (req: Request, res: Response) => {
        res.json(todosApi.findAll())
    });
    app.post('/api/todo', (req: Request, res: Response) => {
        res.json(todosApi.create(req.body))
    });
}

export default { route };