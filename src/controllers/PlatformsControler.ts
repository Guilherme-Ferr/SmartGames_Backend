import { getCustomRepository } from "typeorm";
import { PlatformsRepositories } from "../repositories/PlatformsRepositories";
import { Request, Response } from "express";
import { CreatePlatformsServices } from "../services/PlatformsService";

export default {
  //Listar todas as plataformas
  async index(req: Request, res: Response) {
    const platformsRepositories = getCustomRepository(PlatformsRepositories);

    const platforms = await platformsRepositories.find();

    return res.send(platforms);
  },

  //Buscar uma plataforma expecifica
  async find(req: Request, res: Response) {
    const { id } = req.params;

    const platformsRepositories = getCustomRepository(PlatformsRepositories);

    const platform = await platformsRepositories.findOne(id);

    return res.send(platform);
  },

  //Inserir um jogo
  async store(req: Request, res: Response) {
    const { name } = req.body;

    try {
      const createPlatformService = new CreatePlatformsServices();

      const platform = await createPlatformService.execute({
        name,
      });
      return res.json(platform);
    } catch (error) {
      res.status(400).send(error);
    }
  },
};
