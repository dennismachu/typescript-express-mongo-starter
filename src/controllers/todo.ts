import TodoService from '../services/todo'
import { Response, Request } from "express"

class TodoController {
    async create(req: Request, res: Response): Promise<void> {
        try {
            const todo = await TodoService.create('Title I', "Description I")
            console.log(todo);

        } catch (error) {
            console.log(error);
        }
    }
}

export default new TodoController();