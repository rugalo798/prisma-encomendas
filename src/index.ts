import express from "express";
import { routes } from "./routes/encomenda.routes";
const PORT = process.env.PORT || 3333;

const app = express();

app.use(express.json());
app.use("/encomendas", routes);

app.listen(PORT, () => {
  console.log("🚀 Server is running");
});
