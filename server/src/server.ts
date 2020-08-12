import express, { request, response } from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
// www.minhaapi.com.br -> acessa um porta na real não está a mostra, mas local
// tem que colocar, na nossa www.minhaapi.com.br:3333 
// localhost:3333/complementoAqui -> pode ter complementos de rota (recursos -resources)

//GET: Buscar ou listar uma informação
//POST: criar alguma nova informação
//PUT: Atualizar uma informação existente
//DELETE: Deletar uma informação existente

//Parâmetros
  //corpo (Request body): dados para criação ou atualização de um registro 
  //Route params: Identificar qual recurso eu quero atualizar ou detelar 
  //Query Params: Paginação, filtros, ordenação...


app.listen(3333);