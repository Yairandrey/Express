import { Router } from "express";
//import { getMenu, postMenu } from "../controllers/menu.controller.js";
import menuController from "../controllers/menu.controller.js";


const routeMenu = Router();
//Paso la función a ejecutar
routeMenu.get('/menu', menuController.getMenu)

routeMenu.post('/menu', menuController.postMenu)

export default routeMenu;