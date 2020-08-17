# 1

Legal

# 2

CREATE TABLE User (
id VARCHAR(255) PRIMARY KEY,
email VARCHAR(255) UNIQUE NOT NULL,
password VARCHAR(255) NOT NULL
);

import knex from "knex";

export class UserDatabase {
private connection = knex({
client: "mysql",
connection: {
host: process.env.DB_HOST,
port: 3306,
user: process.env.DB_USER,
password: process.env.DB_PASSWORD,
database: process.env.DB_DATABASE_NAME,
},
});

    private static TABLE_NAME = "User";

public async createUser(
id: string,
email: string,
password: string
): Promise<void> {
await this.connection
.insert({
id,
email,
password,
})
.into(UserDatabase.TABLE_NAME);
}
}

# 3

import \* as jwt from "jsonwebtoken";

export class Authenticator {
private static EXPIRES_IN = "1min";
public generateToken(input: AuthenticationData): string {
const token = jwt.sign(
{
id: input.id,
},
process.env.JWT_KEY as string,
{
expiresIn: Authenticator.EXPIRES_IN,
}
);
return token;
}
}

interface AuthenticationData {
id: string;
}

# 4

app.post("/signup", async (req: Request, res: Response) => {
try {
// Item b. Validação do email
if (!req.body.email || req.body.email.indexOf("@") === -1) {
throw new Error("Invalid email");
}

    // Item c. Validação da senha
    if (!req.body.password || req.body.password.length < 6) {
      throw new Error("Invalid password");
    }

    const userData = {
      email: req.body.email,
      password: req.body.password,
    };

    const idGenerator = new IdGenerator();
    const id = idGenerator.generate();

    const userDb = new UserDatabase();
    await userDb.createUser(id, userData.email, userData.password);

    const authenticator = new Authenticator();
    const token = authenticator.generateToken({
      id,
    });

    res.status(200).send({
      token,
    });

} catch (err) {
res.status(400).send({
message: err.message,
});
}
});

# 5

import knex from "knex";

export class UserDatabase {
private connection = knex({
client: "mysql",
connection: {
host: process.env.DB_HOST,
port: 3306,
user: process.env.DB_USER,
password: process.env.DB_PASSWORD,
database: process.env.DB_DATABASE_NAME,
},
});

private static TABLE_NAME = "User";

public async createUser(
id: string,
email: string,
password: string
): Promise<void> {
// ...
}

public async getUserByEmail(email: string): Promise<any> {
const result = await this.connection
.select("\*")
.from(UserDatabase.TABLE_NAME)
.where({ email });

    return result[0];

}
}

# 6

app.post("/login", async (req: Request, res: Response) => {
try {
// Item b. Validação do email
if (!req.body.email || req.body.email.indexOf("@") === -1) {
throw new Error("Invalid email");
}

    const userData = {
      email: req.body.email,
      password: req.body.password,
    };

    const userDatabase = new UserDatabase();
    const user = await userDatabase.getUserByEmail(userData.email);

    if (user.password !== userData.password) {
      throw new Error("Invalid password");
    }

    const authenticator = new Authenticator();
    const token = authenticator.generateToken({
      id: user.id,
    });

    res.status(200).send({
      token,
    });

} catch (err) {
res.status(400).send({
message: err.message,
});
}
});

# 7

import \* as jwt from "jsonwebtoken";

export class Authenticator {
private static EXPIRES_IN = "1min";
public generateToken(input: AuthenticationData): string {
// ...
}

public getData(token: string): AuthenticationData {
const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
const result = {
id: payload.id,
};
return result;
}
}

# 8

import knex from "knex";

export class UserDatabase {
private connection = knex({
client: "mysql",
connection: {
host: process.env.DB_HOST,
port: 3306,
user: process.env.DB_USER,
password: process.env.DB_PASSWORD,
database: process.env.DB_DATABASE_NAME,
},
});

private static TABLE_NAME = "User";

public async createUser(
id: string,
email: string,
password: string
): Promise<void> {
// ...
}

public async getUserByEmail(email: string): Promise<any> {
// ...
}

public async getUserById(id: string): Promise<any> {
const result = await this.connection
.select("\*")
.from(UserDatabase.TABLE_NAME)
.where({ id });

    return result[0];

}
}

app.get("/user/profile", async (req: Request, res: Response) => {
try {
const token = req.headers.authorization as string;

    const authenticator = new Authenticator();
    const authenticationData = authenticator.getData(token);

    const userDb = new UserDatabase();
    const user = await userDb.getUserById(authenticationData.id);

    res.status(200).send({
      id: user.id,
      email: user.email,
    });

} catch (err) {
res.status(400).send({
message: err.message,
});
}
});
