
import express from "express";
import TodosApi from "../api/todos";
const todosApi = new TodosApi();

class TodoRoutes {
    public path: string = '/todos';
    public router = express.Router();
    constructor(){
        this.initializeRoutes();
    }
    public initializeRoutes(){
        this.router.get(this.path, (req: express.Request, res: express.Response) => {
            res.json(todosApi.findAll())
        });
    }
}

export default function todo(app: express.Application) {

    app.post('/todo/create', (req: express.Request, res: express.Response) => {
        res.json(todosApi.create(req.body))
    })

    app.get('/todo/list', )
};