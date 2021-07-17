import { EntityRepository, Repository } from "typeorm";
import { Stores } from "../entities/Stores";

@EntityRepository(Stores)
class StoresRepositories extends Repository<Stores> {}

export { StoresRepositories };
