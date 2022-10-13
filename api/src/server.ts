import express, { NextFunction, Request, Response } from 'express';
import cors from "cors";
import { router } from "./router";

const app = express()

app.use(cors())

app.use(express.json())

app.use(router)

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
    return response.json({
        status: "Error",
        message: error.message,
    })
})

app.listen(3001, () => {
    console.log('Listening on port 3001!');
})

