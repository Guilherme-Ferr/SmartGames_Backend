import { getCustomRepository } from "typeorm";
import { GamesRepositories } from "../repositories/GamesRepositories";
import { Request, Response } from "express";
import { CreateGamesServices } from "../services/GamesService";

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

    return res.send(game);
  },

  //Inserir um jogo
  async store(req: Request, res: Response) {
    const { name, description, value, image, platformId } = req.body;
    console.log(platformId);

    try {
      const createGameService = new CreateGamesServices();

      const gamesRepositories = getCustomRepository(GamesRepositories);

      const game = await createGameService.store({
        name,
        description,
        value,
        image,
      });
      for (const item in platformId) {
        await gamesRepositories.query(
          `insert into games_platforms_platforms(gamesIdGame, platformsIdPlatform, created_at) values(${
            game.id_game
          }, ${parseInt(item) + 1}, datetime("now"))`
        );
      }

      return res.json(game);
    } catch (error) {
      res.status(400).send(error);
    }
  },

  //Aplicar desconto
  async update(req: Request, res: Response) {
    const { name } = req.body;

    const gameRepositorie = getCustomRepository(GamesRepositories);

    try {
      const game = await gameRepositorie.findOne(name);

      game.discount = 20;

      gameRepositorie.save(game);

      //retornar resposta
      return res.json(game);
    } catch (error) {
      res.status(400).send(error);
    }
  },
};
