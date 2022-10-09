import { Request, Response } from "express";
import express, { Express } from "express"
import mongoose from "mongoose"
import cors from "cors"

import todoRoutes from "../server/routes/todoRoutes";

const app:Express = express();

app.get("/", (req: Request, res: Response) => {
	res.send("Hello there");
});

const PORT: string | number = process.env.PORT || 4000

app.use(cors())
app.use(todoRoutes)

app.listen(PORT, () => {
	console.log(`Server listening to port ${PORT}`);
});
