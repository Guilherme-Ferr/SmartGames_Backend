import { getCustomRepository } from "typeorm";
import { StoresRepositories } from "../repositories/StoresRepositories";

interface Istores {
  name: string;
  cep: number;
}

class CreateStoresServices {
  async store({ name, cep }: Istores) {
    const storesRepository = getCustomRepository(StoresRepositories);

    const store = storesRepository.create({
      name,
      cep,
    });

    await storesRepository.save(store);

    return store;
  }
}

export { CreateStoresServices };
