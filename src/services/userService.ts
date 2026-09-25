export interface User{
    name: string,
    email: string
}

export const db = [
    {
        name: "Amanda",
        email: "amanda@dio.bank"
    }
]

export class UserServices{
    db: User[]

    constructor(database: User[] = db){
        this.db = database
    }

    createUser = (name: string, email: string) =>{
        const user = {
            name,
            email
        };

        this.db.push(user)
        console.log('DB atualizado', this.db)
    }

    getAllUsers = () => this.db
}