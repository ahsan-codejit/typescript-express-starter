import IResource from "../types/iresource";
import { Todo } from "../types/iresource/common";
import TodosApi from "./todos";

const todosApi: IResource = new TodosApi();

describe('MoviesApi', () => {

    it('should create a new movie', () => {
        const todoData: Todo = {
            title: 'check coverage'
        }

        const todo: Todo = todosApi.create(todoData);
        expect(todo).toEqual(todoData);
    });

    it('should return all movies', () => {
        const todos = todosApi.findAll();
        expect(todos.length).toEqual(1);
    });
});