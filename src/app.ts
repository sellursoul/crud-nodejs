import express from "express";

import { membersRouter } from "./routes/members-router";
import { carsRouter } from "./routes/cars-router";

export const app = express();

const jsonBodyMiddleware = express.json();
app.use(jsonBodyMiddleware);

app.use("/members", membersRouter);
app.use("/cars", carsRouter);
