import * as bcrypt from "bcryptjs"

export const generateHash = async (str: string): Promise<string> =>{
  const round = Number(process.env.BCRYPT_COST)
  const salt = await bcrypt.genSalt(round)
  const result = await bcrypt.hash(str, salt)
  return result 

}

export const compareHash = (str: string, hash: string ):Promise <boolean> =>{
  return bcrypt.compare(str, hash)
}

//função para gerar a senha hasheada