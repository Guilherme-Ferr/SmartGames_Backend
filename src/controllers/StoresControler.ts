import { getCustomRepository } from "typeorm";
import { StoresRepositories } from "../repositories/StoresRepositories";
import { Request, Response } from "express";
import { CreateStoresServices } from "../services/StoresService";

export default {
  //Listar todas as lojas
  async index(req: Request, res: Response) {
    const storesRepositories = getCustomRepository(StoresRepositories);

    const stores = await storesRepositories.find();

    return res.send(stores);
  },

  //Buscar uma loja expecifica
  async find(req: Request, res: Response) {
    const { id } = req.params;

    const storesRepositories = getCustomRepository(StoresRepositories);

    const store = await storesRepositories.findOne(id);

    return res.send(store);
  },

  //Inserir uma loja
  async store(req: Request, res: Response) {
    const { name, cep } = req.body;

    try {
      const createStoreService = new CreateStoresServices();

      const store = await createStoreService.store({
        name,
        cep,
      });
      return res.json(store);
    } catch (error) {
      res.status(400).send(error);
    }
  },
};
