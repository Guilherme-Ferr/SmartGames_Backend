import { EntityRepository, Repository } from "typeorm";
import { Games } from "../entities/Games";

@EntityRepository(Games)
class GamesRepositories extends Repository<Games> {}

export { GamesRepositories };
