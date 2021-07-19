import { getCustomRepository } from "typeorm";
import { StoresRepositories } from "../repositories/StoresRepositories";
import { Request, Response } from "express";

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
};
