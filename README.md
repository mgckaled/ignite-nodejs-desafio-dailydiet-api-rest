<!-- markdownlint-disable MD033 -->

# Ignite Node.js - Desafio `Daily Diet - API REST`

<div align="center">
   <img alt="Node.js" src=".github/assets/nodejs-logo.jpg" width="25%"/>
</div>
<br>

<div align="center">
   <a href="https://github.com/mgckaled">
      <img alt="Made by mgckaled" src="https://img.shields.io/badge/made%20by-mgckaled-yellow">
   </a>
   <img alt="GitHub Repo Size" src="https://img.shields.io/github/repo-size/mgckaled/ignite-nodejs-desafio-dailydiet-api-rest">
   <img alt="GitHub Language Count" src="https://img.shields.io/github/languages/count/mgckaled/ignite-nodejs-desafio-dailydiet-api-rest">
</div>
<br>

<div align="center">

[**Desafio**](#desafio) &nbsp;&nbsp;**•**&nbsp;&nbsp;
[**Tecnologias**](#tecnologias) &nbsp;&nbsp;**•**&nbsp;&nbsp;
[**Licença**](#licença)

</div>

## Desafio

Nesse desafio desenvolveremos uma API para controle de dieta diária, a Daily Diet API.

### Regras da aplicação

- Deve ser possível criar um usuário
- Deve ser possível identificar o usuário entre as requisições
- Deve ser possível registrar uma refeição feita, com as seguintes informações:
  - Nome
  - Descrição
  - Data e Hora
  - Está dentro ou não da dieta
  - *As refeições devem ser relacionadas a um usuário.*
- Deve ser possível editar uma refeição, podendo alterar todos os dados acima
- Deve ser possível apagar uma refeição
- Deve ser possível listar todas as refeições de um usuário
- Deve ser possível visualizar uma única refeição
- Deve ser possível recuperar as métricas de um usuário
  - Quantidade total de refeições registradas
  - Quantidade total de refeições dentro da dieta
  - Quantidade total de refeições fora da dieta
  - Melhor sequência de refeições dentro da dieta
- O usuário só pode visualizar, editar e apagar as refeições o qual ele criou

### Comandos utilizados no projeto

```bash
# iniciar projeto
$ npm init -y

# criar tsconfig.json
npx tsc --init

# rodar migrations
npx knex -- migrate:make <migration-name>
```

### Código Comentado

Acesse análises e comentários sobre o código [AQUI](./.github/docs/index.md).

## Tecnologias

- [`Node.js`](https://nodejs.org/n/)
- [`Fastify`](https://fastify.dev/)
- [`Typescript`](https://www.typescriptlang.org/)
- [`knex`](https://knexjs.org/)
- [`node-postgres`](https://www.npmjs.com/package/pg)
- [`dotenv`](https://www.npmjs.com/package/dotenv)
- [`zod`](https://www.npmjs.com/package/zod)
- [`vitest`](https://vitest.dev/)
- [`tsx`](https://www.npmjs.com/package/tsx)
- [`tsup`](https://www.npmjs.com/package/tsup)
- [`supertest`](https://www.npmjs.com/package/supertest)
- [`sqlite3`](https://www.npmjs.com/package/sqlite3)

## Licença

Distribuído sob a licença ***MIT***. Veja [LICENSE](LICENSE) para mais informações.  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=49AA26&labelColor=000000">

---

<h5 align="center">
 2023 - <a href="https://github.com/mgckaled/">Marcel Kaled</a>
</h5>
