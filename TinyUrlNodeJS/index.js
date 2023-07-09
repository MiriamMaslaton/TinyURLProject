//external imports
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import crypto, { sign } from "crypto"
import jwt from "jsonwebtoken"
//internal imports
import LinksRouter from './Routers/LinksRouter.js'
import UsersRouter from './Routers/UsersRouter.js'
import connectDB from './database.js'

//connect DB
connectDB();

//app and port definitions
const app = express()
const port = 3000

//using external packages
app.use(cors())
app.use(bodyParser.json())

//jwt
const secret = "JIs%WCfS#Sl454d5FX"

//middlewares
const logMiddleware = (req, res, next) => {
    req.UUID = crypto.randomUUID();
    console.log(`request ${req.UUID} started.`)
    next()
}
const jwtMiddleware = (req, res, next) => {
    const token = req.headers.authorization.slice(7);
    console.log("token: ", token)
    try {
        const decoded = jwt.verify(token, secret)
        req.userId = decoded.userId
        next()
    } catch {
        res.status(401).res.status(401).send({ message: "unauthorized" })
    }
}

//endpoints
app.get('/', (req, res) => {
    res.send("Hello Node.JS!")
})
app.post('/login', (req, res) => {
    if (req.body.userName == "Name" && req.body.password == "1234") {
        const token = jwt.sign({ userId: 1, userName: "Name", roles: ["someRole"] }, secret)
        res.send({ accessToken: token })
    }
    else {
        res.status(401).send({ message: "unauthorized" })
    }
});

//routers
app.use('/', logMiddleware)
app.use('/links', LinksRouter)
app.use('/users', UsersRouter)

//listen definition
app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
})