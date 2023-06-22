import express from "express";
import categoriaRouter from "./routes/categorias.routes.js";
const app = express();
app.set("port",5000);
//Routes
app.use(categoriaRouter);
export default app;