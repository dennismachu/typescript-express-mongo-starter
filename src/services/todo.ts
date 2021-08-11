import { Todo } from '../models/todo'

class TodoService {
    // Create
    async create(title: string, description: string) {
        let todo = new Todo({
            title: title,
            description: description
        });
        return await todo.save()
    }
}

export default new TodoService();