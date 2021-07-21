import { Double, getCustomRepository } from "typeorm";
import { GamesRepositories } from "../repositories/GamesRepositories";
import { Request, Response } from "express";

export default {
  //Listar todos os jogos
  async index(req: Request, res: Response) {
    const gamesRepositories = getCustomRepository(GamesRepositories);

    const games = await gamesRepositories.find({
      relations: ["platforms", "stores"],
    });

    return res.send(games);
  },

  //Buscar um jogo expecifico
  async find(req: Request, res: Response) {
    const { id } = req.params;

    const gamesRepositories = getCustomRepository(GamesRepositories);

    const game = await gamesRepositories.findOne(id, {
      relations: ["platforms", "stores"],
    });

    if (game.discount !== 0) {
      const discountValue: number = (game.discount * Number(game.value)) / 100;

      game.value = Number(game.value) - discountValue;
    }

    return res.send(game);
  },

  //Aplicar desconto
  async update(req: Request, res: Response) {
    const { id } = req.params;

    const gameRepositorie = getCustomRepository(GamesRepositories);

    try {
      const game = await gameRepositorie.findOne(id);

      game.discount = 20;

      gameRepositorie.save(game);

      return res.send(game);
    } catch (error) {
      res.status(400).send(error);
    }
  },
};
