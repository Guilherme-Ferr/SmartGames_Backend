import { EntityRepository, Repository } from "typeorm";
import { Platforms } from "../entities/Platforms";

@EntityRepository(Platforms)
class PlatformsRepositories extends Repository<Platforms> {}

export { PlatformsRepositories };
