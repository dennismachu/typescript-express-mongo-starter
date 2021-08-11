import { Document, Model, model, Schema } from 'mongoose';

export interface ITodo extends Document {
    title: string;
    description: string;
}

const todoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

const Todo: Model<ITodo> = model('Todo', todoSchema)
export { Todo }