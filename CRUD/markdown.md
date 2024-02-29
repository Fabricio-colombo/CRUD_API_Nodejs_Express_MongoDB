# Projeto de API CRUD com Node.js, Express e MongoDB

Este projeto consiste na criação de uma API CRUD para gerenciar produtos utilizando Node.js, Express e MongoDB.

## Configuração do Ambiente

1. Certifique-se de ter o Node.js e o MongoDB instalados em sua máquina.
2. Crie uma pasta para o projeto e navegue até ela no terminal.

## Inicialização do Projeto

1. Inicie um novo projeto Node.js executando o comando:

2. Instale as dependências necessárias (Express, Mongoose) executando o comando:

3. Crie os arquivos do projeto (index.js, config.js, models/product.model.js).

## Configuração do MongoDB

1. Crie um banco de dados MongoDB.
2. Obtenha a URL de conexão do MongoDB para o seu banco de dados.

## Configuração do Servidor Express

1. No arquivo `index.js`, importe o Express e o Mongoose.
2. Estabeleça a conexão com o MongoDB utilizando a URL de conexão obtida anteriormente.
3. Defina o esquema do modelo do produto utilizando o `mongoose.Schema`.
4. Crie o modelo do produto utilizando `mongoose.model()`.

## Definição das Rotas

1. Configure as rotas do Express para manipular as operações CRUD dos produtos.
2. Implemente manipuladores de rota assíncronos para cada rota que interajam com o modelo do produto.

## Gestão de Erros

1. Implemente tratamento de erros em suas rotas para lidar com possíveis erros durante as operações CRUD.

## Inicialização do Servidor

1. Inicie o servidor Express utilizando `app.listen()` para escutar por conexões HTTP.

## Teste da API

1. Utilize ferramentas como o Insomnia ou o Postman para testar as rotas da API.
2. Verifique se as operações CRUD funcionam corretamente.

## Contribuição

- Sinta-se à vontade para contribuir com melhorias ou correções no projeto.
- Envie pull requests ou abra issues para relatar problemas encontrados.

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo LICENSE para obter mais detalhes.


##### Created by: [Fabricio Colombo](https://github.com/Fabricio-colombo)