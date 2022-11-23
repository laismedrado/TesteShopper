export const messages = {
  notExist: (name: string) => `${name} não existe`,
  notDelete: (name: string) => `${name} não deletado`,
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
