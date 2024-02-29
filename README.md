# Desenvolvimento de uma API de Gerenciamento de Produtos com Node.js, Express e MongoDB

## Objetivo

O objetivo deste projeto é criar uma aplicação backend robusta e escalável para gerenciar produtos. A API permite que os usuários realizem operações básicas em produtos, como adicionar novos produtos, visualizar a lista de produtos disponíveis, atualizar as informações de um produto existente e excluir produtos do banco de dados.

## Tecnologias Utilizadas

- **Node.js:** Plataforma de desenvolvimento backend JavaScript.
- **Express:** Framework web Node.js para construir aplicativos web e APIs.
- **MongoDB:** Banco de dados NoSQL orientado a documentos.
- **Mongoose:** ODM (Object Data Modeling) para MongoDB, utilizado para modelar os dados da aplicação e realizar operações no banco de dados.

## Estrutura do Projeto

/
|-- config/
| |-- config.js
|-- models/
| |-- product.model.js
|-- routes/
| |-- product.routes.js
|-- index.js
|-- package.json
|-- README.md


- **config/:** Pasta contendo arquivos de configuração da aplicação, como a conexão com o banco de dados.
- **models/:** Pasta contendo os modelos de dados da aplicação, definidos utilizando o Mongoose.
- **routes/:** Pasta contendo os arquivos de rotas da aplicação, onde são definidos os endpoints da API.
- **index.js:** Arquivo principal da aplicação, onde é inicializado o servidor Express e configurada a conexão com o banco de dados.
- **package.json:** Arquivo de manifesto do Node.js que contém as dependências do projeto.
- **README.md:** Documentação do projeto em formato Markdown.

## Funcionalidades da API

1. **Cadastro de Produtos:** Permite adicionar novos produtos ao banco de dados.
2. **Listagem de Produtos:** Retorna a lista de todos os produtos cadastrados.
3. **Atualização de Produtos:** Permite atualizar as informações de um produto existente.
4. **Exclusão de Produtos:** Permite excluir um produto do banco de dados.

## Como Usar

1. Clone o repositório do GitHub:

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio
npm install
DB_PASSWORD=sua_senha_do_mongodb
npm start

Acesse a API em http://localhost:3000.
Rotas da API
GET /api/products: Retorna a lista de todos os produtos.
POST /api/products: Adiciona um novo produto.
PUT /api/products/:id: Atualiza as informações de um produto existente.
DELETE /api/products/:id: Exclui um produto do banco de dados.
Exemplo de Uso
Abaixo está um exemplo de como usar a API para adicionar um novo produto utilizando o cURL:

curl -X POST \
  http://localhost:3000/api/products \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "Produto de Exemplo",
    "quantity": 10,
    "price": 50,
    "description": "Descrição do Produto de Exemplo"
  }'
Considerações Finais
Este projeto demonstra como construir uma API simples de gerenciamento de produtos utilizando Node.js, Express e MongoDB. A aplicação pode ser facilmente estendida e personalizada para atender às necessidades específicas do seu projeto. Experimente explorar e modificar o código-fonte para aprender mais sobre como construir aplicativos web e APIs usando essas tecnologias populares.

