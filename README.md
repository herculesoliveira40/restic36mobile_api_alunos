## Clone this repo
```
 git clone https://github.com/herculesoliveira40/restic36mobile_api_alunos.git
```

## Install node_modules packages
```
 npm install

```

## Start project
```
 npm start

```

## URL
```
 http://localhost:3000/alunos

```

## Rotas da API

Rotas da API com métodos e endpoints de alunos:

### Criar um novo aluno
**Endpoint:** `[POST] /alunos`

**Descrição:** Cria um novo aluno enviando os dados do aluno.

### Listar todos os alunos
**Endpoint:** `[GET] /alunos`

**Descrição:** Lista todos os alunos cadastrados na base de dados.

### Buscar um aluno específico
**Endpoint:** `[GET] /alunos/:id`

**Descrição:** Retorna os dados de um aluno específico identificado pelo seu ID.

### Atualizar as informações de um aluno
**Endpoint:** `[PUT] /alunos/:id`

**Descrição:** Atualiza as informações de um aluno específico identificado pelo seu ID, enviando os novos dados.

### Excluir um aluno
**Endpoint:** `[DELETE] /alunos/:id`

**Descrição:** Exclui um aluno específico identificado pelo seu ID.
