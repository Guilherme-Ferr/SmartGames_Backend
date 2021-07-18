import { getCustomRepository } from "typeorm";
import { GamesRepositories } from "../repositories/GamesRepositories";
import { Request, Response } from "express";
import { CreateGamesServices } from "../services/GamesService";

export default {
  //Listar todos os jogos
  async index(req: Request, res: Response) {
    const gamesRepositories = getCustomRepository(GamesRepositories);

    const games = await gamesRepositories.query(
      "select games.id_game as idGame, games.name as gameName, platforms.id_platform as idPlatform, platforms.name as platformName from games inner join games_platforms_platforms on games.id_game = games_platforms_platforms.gamesIdGame inner join platforms on platforms.id_platform = games_platforms_platforms.platformsIdPlatform order by games.name asc"
    );

    return res.send(games);
  },

  //Buscar um jogo expecifico
  async find(req: Request, res: Response) {
    const { id } = req.params;

    const gamesRepositories = getCustomRepository(GamesRepositories);

    const game = await gamesRepositories.findOne(id);

    return res.send(game);
  },

  //Inserir um jogo
  async store(req: Request, res: Response) {
    const { name, description, value, image, platformId } = req.body;
    console.log(platformId);

    try {
      const createGameService = new CreateGamesServices();

      const gamesRepositories = getCustomRepository(GamesRepositories);

      const game = await createGameService.execute({
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
};
