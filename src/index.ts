import express from "express";
import { routes } from "./routes/encomenda.routes";

const app = express();

app.use(express.json());
app.use("/encomendas", routes);

app.listen(3333, () => {
  console.log("🚀 Server is running");
});
