import { Router } from "express";
import GamesControler from "./controllers/GetGamesControler";
import StoresControler from "./controllers/GetStoresControler";
import PlatformsControler from "./controllers/GetPlatformsControler";

const router = Router();

//Rotas de games
router.get("/games", GamesControler.index);
router.get("/games/:id", GamesControler.find);

//Rotas de lojas
router.get("/stores", StoresControler.index);
router.get("/stores/:id", StoresControler.find);

//Rotas de plataformas
router.get("/platforms", PlatformsControler.index);
router.get("/platforms/:id", PlatformsControler.find);

export { router };
