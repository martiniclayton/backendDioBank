import { User, UserServices } from "./userService";

describe("UserService", ()=>{
    const mockDb: User[] = []
    const userService = new UserServices(mockDb);
    afterEach(()=>{
        vi.restoreAllMocks();
    })

    it("Deve adicionar um novo usuário", ()=>{
        const spyConsole = vi.spyOn(global.console, "log")
        userService.createUser("Clayton", "clayton@dev.com");

        expect(spyConsole).toHaveBeenCalledWith("DB atualizado", mockDb)
    })
})