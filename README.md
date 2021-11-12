<h1 align="center">How I Find You?</h1>

<img src="https://github.com/daancorrea/project-how-i-find-you/blob/master/image.png" />
<br>

# 🖥 Sobre o projeto

Aplicação para armazenamento de contatos com Nome | Telefone | Email.

# Tecnologias:

-> Back-end

- [x] JavaScript
- [x] Express
- [x] Sequelize
- [x] Yup (validação)
- [x] Banco de Dados: PostgreSQL

-> Front-end

- [x] JavaScript
- [x] React
- [x] Styled-components
- [x] Yup (validação)
- [x] React Hook Form (validação)

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e [Yarn](https://yarnpkg.com/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone <https://github.com/daancorrea/project-how-i-find-you.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd server

# Acesse a pasta src/config pelo editor
> Altere o arquivo database.js com o "username", "password" e "database" para se conectar com o banco de dados PostgreSQL

# Instale as dependências
$ yarn

# Rode as migrations com o comando
$ yarn sequelize db:migrate

# Execute a aplicação em modo de desenvolvimento
$ yarn dev

# O servidor inciará na porta:3001 - acesse <http://localhost:3001>
```

### 🎲 Rodando o Front End (interface)

```bash
# Clone este repositório (caso já tenha feito isso no passo anterior não precisa clonar)
$ git clone <https://github.com/daancorrea/project-how-i-find-you.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd web

# Instale as dependências
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ yarn start

# O servidor inciará na porta:3000 - acesse <http://localhost:3000>
```

### Autor
---

<a href="https://www.linkedin.com/in/daniel-euclides-correa/">
 <img style="border-radius:50%" src="https://avatars.githubusercontent.com/u/81574142?v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Daniel Euclides Corrêa</b></sub></a> <a href="https://www.linkedin.com/in/daniel-euclides-correa/" title="LinkedIn">🚀</a>


Feito com ❤️ por Daniel Euclides Corrêa 👋🏽 Entre em contato!

Algo deu errado? 😥
<br>
Alguma sujestão? 😎
<br>
Vamos conversar... [Clique aqui e me chama no LinkedIn](https://www.linkedin.com/in/daniel-euclides-correa/)
