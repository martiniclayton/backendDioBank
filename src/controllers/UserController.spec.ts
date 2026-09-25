import { UserServices } from "../services/userService";
import { UserController } from "./UserController"
import { makeMockResponse } from "../__mocks__/mockResponse.mock";

import { Request } from 'express'

describe("UserController", () => {
    const mockUserServices: Partial<UserServices> = {
        createUser: vi.fn()
    }
    const userController = new UserController(mockUserServices as UserServices);

    it("Deve adicionar um novo usuário", () => {
        const mockRequest = {
            body: {
                name: "Clayton",
                email: "clayton@dev.com"
            }
        } as Request
        const mockResponse = makeMockResponse()
        userController.createuser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(201);
        expect(mockResponse.state.json).toMatchObject({ mensagem: 'Usuário Criado' });
    })

    it("Deve informar um erro caso o usuário não informe o e-mail", () => {
        const mockRequest = {
            body: {
                name: "Clayton",
                email: ""
            }
        } as Request
        const mockResponse = makeMockResponse()
        userController.createuser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(400);
        expect(mockResponse.state.json).toMatchObject({ mensagem: 'BAD request: e-mail obrigatório' });

    })

    it("Deve informar uma mensagem quando excluir um usuário", () => {
        const mockRequest = {
            body: {
                name: "Clayton",
                email: "clayton@dev.com"
            }
        } as Request
        const mockResponse = makeMockResponse()
        userController.deleteUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(200);
        expect(mockResponse.state.json).toMatchObject({ mensagem: 'Usuário deletado' });

    })
})