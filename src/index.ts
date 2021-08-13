import express from "express"
import { json } from 'body-parser'
import './database'
import TodoApp from './routes/todo'

const app = express()
const appVersion = '/api/v1/'
app.use(json())
app.use(appVersion, TodoApp)

app.listen(process.env.PORT || 3000, () => {
    console.log('Servers are listening')
})