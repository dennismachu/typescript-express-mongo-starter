import express from "express"
import { json } from 'body-parser'
import './database'
import TodoApp from './routes/todo'

const app = express()
app.use(json())
app.use('/api/v1/', TodoApp)

app.listen(process.env.PORT || 3000, () => {
    console.log('Servers are listening')
})