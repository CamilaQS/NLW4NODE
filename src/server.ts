import express, { response } from 'express';

const app = express( );

/** Métodos HTTP
* GET => Busca
* POST => Salvar na aplicação
* PUT =>Alterar informação
* DELETE => Deetar algo
* PATCH => Quando quer alterar apenas alguma informação específica
*/


//http://localhost:3333/users

app.get("/", (request, response) => {
    return response.json( {message: "Hello World"} )
});

// 1 parâmetro => Rota (Recurtso API)
// 2 param => request, response

app.post("/", (request, response) =>{
   //  Recebeu os dado para salvar
   return response.json({message:"Os dados foram alvos com sucesso"}); 
})

app.listen(3333, () => console.log( "Server is running!") );