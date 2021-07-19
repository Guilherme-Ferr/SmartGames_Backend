import { getCustomRepository } from "typeorm";
import { PlatformsRepositories } from "../repositories/PlatformsRepositories";

interface Iplatforms {
  name: string;
}

class CreatePlatformsServices {
  async store({ name }: Iplatforms) {
    const platformsRepository = getCustomRepository(PlatformsRepositories);

    const platform = platformsRepository.create({
      name,
    });

    await platformsRepository.save(platform);

    return platform;
  }
}

export { CreatePlatformsServices };
