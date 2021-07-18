import { Double, getCustomRepository } from "typeorm";
import { GamesRepositories } from "../repositories/GamesRepositories";

interface Igames {
  name: string;
  description: string;
  value: Double;
  image: string;
}

class CreateGamesServices {
  async execute({ name, description, value, image }: Igames) {
    const gamesRepository = getCustomRepository(GamesRepositories);

    const game = gamesRepository.create({
      name,
      description,
      value,
      image,
    });

    await gamesRepository.save(game);

    return game;
  }
}

export { CreateGamesServices };
