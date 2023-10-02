<!-- PROJECT LOGO -->

<p align="center">
  <img alt="nlw-IA" src=".github/nlw-ia-logo.png" width="60%"> <!-- <img alt="nlw-IA" src=".github/logo-rocketseat.png" width="25%">  -->
</p>
   <h1 align="center"> upload.ai </h1>
 </p>
  	<br />
<p align="center"> 
   <img src="https://img.shields.io/github/languages/count/lamendes/nlw-ia" alt="Languages">
	<img src="https://img.shields.io/github/repo-size/lamendes/nlw-ia " alt="Repo Size"> 
  	<a href="https://github.com/lamendes/nlw-ia/commits/master"> 
   		<img src="https://img.shields.io/github/last-commit/lamendes/nlw-ia" alt="Last Commit"> 
 	</a> 
 	<img src="https://img.shields.io/badge/made%20by- <nlw/>/Rocketseat-%2304D361%22" alt="Languages">
  	<a href="https://opensource.org/licenses/MIT"> 
   		<img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License MIT"> 
  	</a> 
</p>

<!-- TABLE OF CONTENTS -->

## 🗂 Conteúdo

<!-- - 📝 [Tabela de Conteúdo](#-tabela-de-conteúdo) -->

- 📋 [Projeto](#-projeto)
  - 🚀 [Tecnologias](#-tecnologias)
  - 📷 [Preview](#-preview)
- 📦 [Instalação](#-instalação)
- ⚖️ [Licença](#%EF%B8%8F-licença)
- 📫 [Contato](#-contato)

<!-- ABOUT THE PROJECT -->

## 📋 Projeto

Este projeto inovador, desenvolvido durante o evento nlw-IA ministrado pelo [Diego Fernandes](https://github.com/diego3g) da [Rocketseat](https://github.com/Rocketseat), tem como objetivo criar uma aplicação web que utiliza inteligência artificial de ponta para analisar e extrair dados-chave de vídeos de forma automatizada. O nlw-IA marca mais um capítulo na jornada da [Rocketseat](https://github.com/Rocketseat) em democratizar o acesso à tecnologia de IA, permitindo que qualquer desenvolvedor crie soluções inovadoras e disruptivas, o evento foi um sucesso e mais uma prova da excelência técnica e didática da [Rocketseat](https://github.com/Rocketseat).

### 🚀 Tecnologias

- [TypeScriot][typescript]
- [VS Code][vc]
- [PNPm][PNPm]
- [Vite][ViteJS]
- [Shadcn/ui][shadcn/ui]
- [Lucide][Lucide]
- [ESlint][eslint]
<!-- -   [CORS][cors]
- [Expo][expo]
- [Express][express]
- [Insomnia][insomnia]
- [KNEX.JS][knexjs]
- [NodeJS][nodejs]
- [Nodemon][nodemon]
- [npm][npm]
- [Prettier][prettier]
- [React][react]
- [React Native][reactnative]
- [SQLite][sqlite]
- [Yarn][yarn] -->

## 📷 Preview

##### 💻 frontend:

<p align="center">
  <img alt="Rocketseat Education" src="https://avatars.githubusercontent.com/u/69590972?s=200&v=4" width="100px" />
</p>


## 📦 Instalação

Para clonar e executar está aplicação, você precisará do [Git](https://git-scm.com), [NodeJS v18.17.1][nodejs] ou superior + [npm v9.17.1][npm] ou superior e o [PNPm 8.7.5][pnpm] instalado no seu computador. No seu terminal rode:

Set your .env file at `/api/.env`.
```properties
DATABASE_URL="file:./dev.db"
OPENAI_KEY="replace-with-your-openai-key"
```


```bash
# Clonando o repositório
$ git clone https://github.com/arthurvalentereis/nlw-ia.git nlw-ia
```

```bash
# Instalando o pnpm
$ npm install -g pnpm
```

```bash
# Backend

# Ir até o repositório
$ cd /api

# Instalando as dependências
$ pnpm i

# Criando as migrations do banco de dados
$ pnpm prisma migrate dev

# Obs.: Após rodar o comando acima, será solicitado o nome da migration, podemos utilizar o seguinte nome "create videos and prompts"  

----------------------------------------------------------------------------------------------------------------------------------------
# Antes de executar a API, alterar o .env.example para .env e adicionar sua chave da API do OpenAI no .env
----------------------------------------------------------------------------------------------------------------------------------------

# Executar a API
$ pnpm run dev

# Obs.: Após rodar o comando acima, disponibilizará a API no endereço http://localhost:3333
```

```bash
# Frontend

# Ir até o repositório
$ cd /web

# Instalando as dependências
$ pnpm i

# Executar Web
$ pnpm run dev
```

<!-- LICENSE -->

## ⚖️ Licença

Esse projeto está sob a licença [MIT](LICENSE).

<!-- CONTACT -->

## 📫 Contato

[**Arthur Reis**](https://www.linkedin.com/in/arthurvreis/) 🚀



[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
[PNPm]: https://pnpm.io/pt/
[npm]: https://www.npmjs.com/
[ViteJS]: https://vitejs.dev/
[shadcn/ui]: https://ui.shadcn.com/
[Lucide]: https://lucide.dev/
[vc]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[html]: https://www.w3schools.com/html/
[express]: https://expressjs.com/
[nodemon]: https://www.postgresql.org
[expo]: https://expo.io
[react]: https://pt-br.reactjs.org
[reactnative]: https://reactnative.dev
[insomnia]: https://insomnia.rest
[sqlite]: https://www.sqlite.org
[knexjs]: http://knexjs.org
[cors]: https://www.npmjs.com/package/cors
[prettier]: https://prettier.io
[eslint]: https://eslint.org
[celebrate]: https://github.com/arb/celebrate
[typescript]: https://www.typescriptlang.org/