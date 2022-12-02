import { Sign } from "crypto";
import { prisma } from "../data/prismaClient";
import { AppError } from "../error/AppErrors";
import { messages } from "../error/messages";
import { generateToken, getTokenData } from "../midleware/authenticator";
import { compareHash, generateHash } from "../midleware/hashManager";
import { AuthenticationData, Edit, Login, CreateUser } from "../model/User";

export const signUpUser = async (input: CreateUser): Promise<string> => {
  try {
    const {  email, password, name, nickname, role, id } = input;
    const UserlAlreadyExist = await prisma.users.findUnique({
      where: {
        email,
      },
    });
    if (UserlAlreadyExist) {
      throw new AppError(messages.alreadyExist("Usuário"));
    }

    if (!email.length) {
      throw new AppError(messages.notEmpty("email"));
    }
    if (!name.length) {
      throw new AppError(messages.notEmpty("name"));
    }
    if (!nickname.length) {
      throw new AppError(messages.notEmpty("nickname"));
    }
    if (!password.length) {
      throw new AppError(messages.notEmpty("password"));
    }
    // if (!role.length) {
    //   throw new AppError(messages.notEmpty("role"));
    // }

    const hashPassword = await generateHash(password);

    const createUser = await prisma.users.create({
      data: {
        id,
        email,
        password: hashPassword,
        name,
        nickname,
        role,
      },
    });

    //depois que eu criei o usuário no banco ,cria-se o token
    const token = generateToken({ role, id });

    return token;
  } catch (error: any) {
    console.log(error);
    throw new AppError(error);
  }
};

// login

export const loginUser = async (input: Login): Promise<string> => {
  try {
    const { email, password } = input;
    let user = await prisma.users.findUnique({
      where: {
        email,
      },
    });
    if (!user) {
      throw new AppError(messages.notExist("Usuário"));
    }

    if (!email.length) {
      throw new AppError(messages.notEmpty("email"));
    }
    if (!password.length) {
      throw new AppError(messages.notEmpty("password"));
    }
    
    const hashComparison = await compareHash(password, user.password);
    
    if (!hashComparison) {
      throw new AppError(" Senha inválida ");
    }
    
    const payload: AuthenticationData = { id: user.id, role: user.role };
    const token = generateToken(payload);
    
    return token;
  } catch (error: any) {
    console.log(error);
    throw new AppError(error);
  }
};

//o edit é um endpoint autenticado , da L98 até  L 112 é sobre o usuário
// na L 116 é veririfcando a autenticação do ADMIN para poder editar  o usuárioo
export const editUser = async (input: Edit): Promise<void> => {
  try {
    let { name, nickname, id, token , role} = input;

    console.log("DRewww", input)

    if (!name || !nickname || !id || !token){
      
      throw new AppError(" preencha!")
    }
 
    
    const tokenData = getTokenData(token);
    // if (role !== "ADMIN") {
    //   throw new AppError(messages.Unauthorized("Usuário"));
    // }
    
    
    const newitUser = await prisma.users.update({
      where: {id },
      data: {
        name,
        nickname,
        id,
        role
     
       
      },
    });
  } catch (error: any) {
    console.log(error);
    throw new AppError(error);
  }
};
