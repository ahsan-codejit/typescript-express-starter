import IResource from "types/iresource";
import { Todo } from "../types/iresource/common";

export default class TodosApi implements IResource {
    todos: Todo[] = [];
    create(data: Todo) {
        this.todos.push(data);
        return data;
    }

    findAll(): Todo[] {
        return this.todos;
    }
}