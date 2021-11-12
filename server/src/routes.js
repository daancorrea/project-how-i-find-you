import { Router } from "express";

import UserController from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";
import ContactController from "./app/controllers/ContactController";
import authMiddleware from "./app/middlewares/auth";

const routes = new Router();

routes.post("/register", UserController.store);
routes.post("/", SessionController.store);

routes.use(authMiddleware); // Middleware de autênticação, todas as rotas abaixo passam por ele.

routes.post("/home", ContactController.store);
routes.get("/home", ContactController.index);
routes.get("/home/:id", ContactController.show);
routes.delete("/home/:id", ContactController.delete)


export default routes;
