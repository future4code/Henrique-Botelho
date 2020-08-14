import knex from "knex";
import dotenv from "dotenv";
import express, { Request, Response } from "express";
import { AddressInfo } from "net";

const app = express();
app.use(express.json());
dotenv.config();

/**
 * CONEXÃO COM O BANCO DE DADOS
 */

const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || "3306"),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

/*==============  QUERYs =================== */

//Recebe o nome, nickname e email do usuário e cria um usuário na tabela User com essas informações
const createUser = async (
  nome: string,
  nickname: string,
  email: string
): Promise<any> => {
  try {
    const user = await connection.raw(`
      INSERT INTO User (name, string, email)
      VALUES (
        "${nome}",
        "${nickname}",
        "${email}"
      )`);
    console.log(user);
  } catch (error) {
    console.log(error);
  }
};

/* ========== ENDPOITS ================= */

app.post("/createUSer", async (req: Request, res: Response) => {
  const userData = {
    nome: req.body.nome,
    nickname: req.body.nickname,
    email: req.body.email,
  };
  await createUser(userData.nome, userData.nickname, userData.email);
  res.status(200).send({ message: "Usuário cadastrado com sucesso!" });
});

/* ========= CONFIGURAÇÃO DO SERVIDOR =========== */

const server = app.listen(process.env.PORT || 3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

/*
app.get("/pokemon", async (req: Request, res: Response) => {

    try {

        const pokemons = await getAllPokemon();
        res.send(pokemons).status(200);

    } catch (error) {
        res.send({ message: error.message }).status(400);
    }


});

app.get("/oi/:nome", async (req: Request, res: Response) => {

    res.send("Oi, " + req.params.nome).status(200);

});


app.post("/pokemon", async (req: Request, res: Response) => {

    try {

        const pokemonData = {
            id: req.body.id,
            name: req.body.name,
            type: req.body.type
        };

        await createNewPokemonBuilder(pokemonData.id, pokemonData.name, pokemonData.type);

        res.status(200).send({ message: "Pokemon criado com sucesso!" });
    } catch (error) {
        res.status(400).send({ message: error.message })
    }



});

*/
