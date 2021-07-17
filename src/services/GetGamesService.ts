import { getCustomRepository } from "typeorm";
import { GamesRepositories } from "../repositories/GamesRepositories";

class GetGamesServices {
  async execute() {
    const gamesRepositories = getCustomRepository(GamesRepositories);

    const games = await gamesRepositories.find();

    return games;
  }
}

export { GetGamesServices };
