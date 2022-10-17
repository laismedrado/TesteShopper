export const messages = {
  notExist: (name: string) => `${name} não existe`,
  alreadyExist: (name: string) => `${name} já existe`,
  recordUniqueField: (name: string, register: string) =>
    `${name}já existe com este % ${register}%`,
  recordCreated: (name: string) => `${name} criado com sucesso.`,
  recordNotCreated: (name: string) => `${name} não foi criado.`,
  required: (name: string) => `${name} % é obrigatório.`,
};
