import { EntityRepository, Repository } from "typeorm";
import { GamesStores } from "../entities/GamesStores";

@EntityRepository(GamesStores)
class GamesStoresRepositories extends Repository<GamesStores> {}

export { GamesStoresRepositories };
