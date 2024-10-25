const express = require('express');
const { create, update, remove, findAll, findById } = require('./repositories/alunoRepository'); 
const app = express();
const port = 3000;
 
app.use(express.json());

app.post('/alunos', (req, res) => {
    const { nome, email, nome_curso } = req.body;
    const aluno = create({ nome, email, nome_curso });
    res.status(201).json(aluno);
});

app.get('/alunos', (req, res) => {
    const alunos = findAll();
    res.json(alunos);
});

app.get('/alunos/:id', (req, res) => { 
    const { id } = req.params;
    const aluno = findById(id);
    if (aluno) {
        res.json(aluno);
    } else {
        res.status(404).send('Aluno não encontrado');
    }
});

app.put('/alunos/:id', (req, res) => {
    const { id } = req.params;
    const { nome, email, nome_curso } = req.body;
    const aluno = update(id, { nome, email, nome_curso });
    res.json(aluno);
});

app.delete('/alunos/:id', (req, res) => {
    const { id } = req.params;
    const aluno = findById(id);
    if (aluno) {
        remove(id);
        res.status(206).send(`Cadastro do aluno "${aluno.nome}" (ID: ${id}) deletado com sucesso`);
    } else {
        res.status(404).send('Aluno não encontrado');
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
