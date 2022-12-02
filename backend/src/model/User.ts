import { Order, Role } from "@prisma/client"

export type CreateUser = {
    id ?: string,
    email: string,
    password: string,
    name: string,
    nickname: string,
    role:Role
    
}


export type AuthenticationData ={
id ?: string,
role:Role
}


export type Login= {
    email: string,
    password: string,
}


export type Edit= {
   name: string,
   nickname: string,
   id: string,
   token: string,
   role: Role
}
