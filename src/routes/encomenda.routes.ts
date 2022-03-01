import { Response, Request, Router } from "express";
import { EncomendaController } from "../controllers/EncomendaController";

const routes = Router();
const encomendaController = new EncomendaController();

routes.get("/all", encomendaController.getAll);
routes.get("/sent", encomendaController.getSent);
routes.post("/create", encomendaController.create);

export { routes };
