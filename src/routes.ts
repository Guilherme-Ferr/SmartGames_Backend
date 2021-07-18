import { Router } from "express";
import GamesControler from "./controllers/GamesControler";
import StoresControler from "./controllers/StoresControler";
import PlatformsControler from "./controllers/PlatformsControler";
import GamesPlatformsControler from "./controllers/GamesPlatformsControler";

const router = Router();

//Rotas de games
router.get("/games", GamesControler.index);
router.get("/games/:id", GamesControler.find);
router.post("/games", GamesControler.store);

//Rotas de lojas
router.get("/stores", StoresControler.index);
router.get("/stores/:id", StoresControler.find);
router.post("/stores", StoresControler.store);

//Rotas de plataformas
router.get("/platforms", PlatformsControler.index);
router.get("/platforms/:id", PlatformsControler.find);
router.post("/platforms", PlatformsControler.store);

//Rotas de feed
router.get("/gamesPlatforms", GamesPlatformsControler.index);
router.get("/gamesPlatforms/:id", GamesPlatformsControler.find);

export { router };
