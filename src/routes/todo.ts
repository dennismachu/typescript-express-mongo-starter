import TodoController from '../controllers/todo'
import express from 'express'

const router = express.Router()

router.post('/todo', TodoController.create)


export default router