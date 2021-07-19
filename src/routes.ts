import { Router } from "express";
import GamesControler from "./controllers/GamesControler";
import StoresControler from "./controllers/StoresControler";
import PlatformsControler from "./controllers/PlatformsControler";

const router = Router();

//Rotas de games
router.get("/games", GamesControler.index);
router.get("/games/:id", GamesControler.find);
router.post("/games", GamesControler.store);
router.put("/games/:name", GamesControler.update);

//Rotas de lojas
router.get("/stores", StoresControler.index);
router.get("/stores/:id", StoresControler.find);
router.post("/stores", StoresControler.store);

//Rotas de plataformas
router.get("/platforms", PlatformsControler.index);
router.get("/platforms/:id", PlatformsControler.find);
router.post("/platforms", PlatformsControler.store);

export { router };
