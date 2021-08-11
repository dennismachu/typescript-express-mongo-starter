import express from "express"
import { json } from 'body-parser'
import './database'

const app = express()
app.use(json())

app.listen(process.env.PORT || 3000, () => {
    console.log('Servers are listening')
})