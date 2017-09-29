import express from 'express'
import bodyParser from 'body-parser'
import userRouter from './routers/user'

const port = 1337
const host = 'localhost'
const app = express()

// middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// routes
app.use('/users', userRouter)

app.listen(port, console.log.bind(console, `Server running at ${host}:${port}`))
