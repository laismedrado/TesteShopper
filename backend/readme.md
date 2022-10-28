Formulário simples de cadastro de pedidos de supermercado




- tecnologias utilizadas na aplicação :
    - Nodejs
    - Typescript
    - Cors
    - Postgres
    - Express
    - Express- Validator
    - AppError
    - Docker
    - dotenv 
    - pretier/eslint

ESTRUTURANDO OS DADOS

    ENDPOINTS (2):

     - criar pedido (POST) : 
             ----> body: name/ data de entrega/ lista de produtos 
             ----> selecionar todos os ids dos produtos informados para checar se a quantidade
             solicitada tem em estoque 
             ----> caso não tenha a aplicação responde  para o frontend um erro
             ----> caso tenha executa-se o update para cada produto atualizando a quantidade no estoque
             (subtrair pela quantidade que foi comprada)
             ----> criar o pedido na tabela e salvar tbm a lista de produtos na tabela
     - pegar todos os produtos (GET) 
             
         
    BANCO (3)

     - Tabela de pedidos:
       -- id 
       -- Nome do cliente
       -- Data de entrega
       -- Preço Total

     - Tabela de produtos:
       -- id 
       -- Nome do produto
       -- preço
       -- quantidade em estoque

     - Tabela de lista de produtos:
       -- id 
       -- id do pedido
       -- id do produto
       -- quantidade do produto 

OBS: O Backend é estruturado  em 3 pastas principais:

data: conexão com o banco de dados
service: regras de negócios
controller: responsavel pelas requisições e envios de respostas
prisma:  entities e as as migrations 

Pastas adicionais: 

model: contém os types de aplicação
routes: rotas dos endpoints
validator:  lib de validação 
AppError : armazenando  tratamento de erro 

