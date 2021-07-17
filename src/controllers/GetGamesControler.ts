import { getCustomRepository } from "typeorm";
import { GamesRepositories } from "../repositories/GamesRepositories";
import { Request, Response } from "express";

export default {
  //Listar todas os jogos
  async index(res: Response) {
    const gamesRepositories = getCustomRepository(GamesRepositories);

    const games = await gamesRepositories.find();

    return res.send(games);
  },
  //Buscar um jogo expecifico
  async find(req: Request, res: Response) {
    const { id } = req.params;

    const gamesRepositories = getCustomRepository(GamesRepositories);

    const game = await gamesRepositories.findOne(id);

    return res.send(game);
  },
};
