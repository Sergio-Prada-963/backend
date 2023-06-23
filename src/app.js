import express from "express";
import categoriaRouter from "./routes/categorias.routes.js";
const app = express();
app.set("port",4001);
//Routes
app.use("/api/categoria",categoriaRouter);
export default app;