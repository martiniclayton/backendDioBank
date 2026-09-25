import { Request, response, Response } from "express";
import { UserServices } from "../services/userService";



export class UserController {
    UserService: UserServices

    constructor(userService: UserServices = new UserServices()) {
        this.UserService = userService
    }

    createuser = (request: Request, response: Response) => {
        const user = request.body;

        if (!user.name) {
            return response.status(400).json({ mensagem: "BAD request: name obrigatório" })
        }

        if (!user.email) {
            return response.status(400).json({ mensagem: "BAD request: e-mail obrigatório" })
        }
        this.UserService.createUser(user.name, user.email)
        return response.status(201).json({ mensagem: 'Usuário Criado' });
    }

    getAllUsers = (request: Request, response: Response) => {
        const users = this.UserService.getAllUsers()
        return response.status(200).json(users)
    }

    deleteUser = (request: Request, response: Response) => {
        const user = request.body

        console.log("Deletando usuário...", user)
        return response.status(200).json({ mensagem: "Usuário deletado" })
    }
}