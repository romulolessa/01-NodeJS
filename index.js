const express = require('express');

const server = express();

server.use(express.json());

server.get('/teste', (req, res) => {
    return res.json({menssagem:"Funciona"});
});

const project = [
    {
        id: "1",
        title: "Novo projeto",
        tasks: ["Nova tarefa"]
      }
];
//lista todos os projetos criados
server.get('/project', (req, res) => {
    return res.json(project);
});

//Cria um novo projeto
server.post('/project/', (req, res) => {
    const {id, title, tasks} = req.body;

    project.push({id, title, tasks});

    return res.json(project);
});
//Altera o titulo do projeto
server.put('/project/:index', (req, res) => {
    const {index} = req.params;
    const {title} = req.body;
    // falta resolver a alteração do titulo, quando faz a solicitação de alteração acaba deletando o id e tasks e formando um vetor do title sozinho
    project[index] = {title};

    return res.json(project);
});
//Deletando Projeto
server.delete('/project/:index', (req, res) => {
    const {index} = req.params;

    project.splice(index, 1);

    return res.send();
});


server.listen(3001);