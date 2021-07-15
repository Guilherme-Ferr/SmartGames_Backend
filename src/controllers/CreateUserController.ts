import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, email, admin } = request.body;

    const cresteUserService = new CreateUserService();

    const user = await cresteUserService.execute({ name, email, admin });

    return response.json(user);
  }
}

export { CreateUserController };
