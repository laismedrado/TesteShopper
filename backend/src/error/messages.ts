export const messages = {
  notExist: (name: string) => `${name} não existe`,
  Unauthorized: (name: string) => `${name} não autorizado`,
  notDelete: (name: string) => `${name} não deletado`,
  notEmpty: (name:string) => `${name}  não pode estar vazio`,
  outOfStock: (name: string) => `${name} sem estoque`,
  alreadyExist: (name: string) => `${name} já existe`,
  recordUniqueField: (name: string, register: string) =>
    `${name}já existe com este % ${register}%`,
  recordCreated: (name: string) => `${name} criado com sucesso.`,
  recordNotCreated: (name: string) => `${name} não foi criado.`,
  required: (name: string) => `${name} % é obrigatório.`,
  sucessStatus: (name: string) => ` ${name} bem sucedida`,
  unsuccessful: (name: string) => ` ${name} mal sucedida`,
};
