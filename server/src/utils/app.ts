import express, { Application, json, urlencoded } from "express";
import cors from "cors";
import { createServer } from "http";

const app: Application = express();

app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cors({ origin: "*" }));

const httpServer = createServer(app);

export default httpServer;
