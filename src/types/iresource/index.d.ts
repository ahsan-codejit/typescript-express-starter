import { Todo } from './common';

export default interface IResource {
    create(data: Todo): Todo
    findAll(): Todo[]
}