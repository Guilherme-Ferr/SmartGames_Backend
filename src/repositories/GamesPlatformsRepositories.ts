import { EntityRepository, Repository } from "typeorm";
import { GamesPlatforms } from "../entities/GamesPlatforms";

@EntityRepository(GamesPlatforms)
class GamesPlatformsRepositories extends Repository<GamesPlatforms> {}

export { GamesPlatformsRepositories };
