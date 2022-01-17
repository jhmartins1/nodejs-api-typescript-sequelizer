import { Request, Response } from "express";
import { UserModel } from "../database/models/UserModel";

class UserController {
  // Mostrar todos os usuarios / Show all users
  async findAll(req: Request, res: Response) {
    const users = await UserModel.findAll();
    return users.length > 0
      ? res.status(200).json(users)
      : res.status(204).send();
  }

  // Mostrar apenas um usuario / Show one user
  async findOne(req: Request, res: Response) {
    const { userId } = req.params;
    const user = await UserModel.findOne({
      where: { id: userId },
    });
    return user ? res.status(200).json(user) : res.status(204).send();
  }

  // Criar um usuario / Create a user
  async create(req: Request, res: Response) {
    const { email, nome, idade } = req.body;
    const user = await UserModel.create({
      email,
      nome,
      idade,
    });
    return res.status(201).json(user);
  }

  // Atualizar um usuario / Update a user
  async update(req: Request, res: Response) {
    const { userId } = req.params;
    await UserModel.update(req.body, { where: { id: userId } });
    return res.status(204).send();
  }

  // Excluir um usuario / Delete a user
  async destroy(req: Request, res: Response) {
    const { userId } = req.params;
    await UserModel.destroy({ where: { id: userId } });
    return res.status(204).send();
  }
}

export default new UserController();
