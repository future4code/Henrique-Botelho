# 1

a) Em criptografia, sal é um dado aleatório que é usado como uma
entrada adicional para uma função unidirecional que "quebra" os dados, uma senha
ou frase-passe.

b, c)

import \* as bcrypt from "bcryptjs";

export class HashManager {
public async hash(s: string): Promise<string> {
const rounds = Number(process.env.BCRYPT_COST);
const salt = await bcrypt.genSalt(rounds);
const result = await bcrypt.hash(s, salt);
return result;
}

public async compare(s: string, hash: string): Promise<boolean> {
return bcrypt.compare(s, hash);
}
}

# 2

app.post("/signup", async (req: Request, res: Response) => {
try {
const userData = {
email: req.body.email,
password: req.body.password
};

    const idGenerator = new IdGenerator();
    const id = idGenerator.generate();

    const hashManager = new HashManager();
    const hashPassword = await hashManager.hash(userData.password);

    const userDb = new UserDatabase();
    await userDb.createUser(id, userData.email, hashPassword);

    const authenticator = new Authenticator();
    const token = authenticator.generateToken({
      id
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

app.post("/login", async (req: Request, res: Response) => {
try {
if (!req.body.email || req.body.email.indexOf("@") === -1) {
throw new Error("Invalid email");
}

    const userData = {
      email: req.body.email,
      password: req.body.password,
    };

    const userDatabase = new UserDatabase();
    const user = await userDatabase.getUserByEmail(userData.email);

    const hashManager = new HashManager();
    const comapreResult = await hashManager.compare(
      userData.password,
      user.password
    );

    if (!comapreResult) {
      throw new Error("Invalid password");
    }

    const authenticator = new Authenticator();
    const token = authenticator.generateToken({
      id: user.id
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

# 3

```sql
ALTER TABLE nome_da_tabela ADD COLUMN role VARCHAR(255) DEFAULT "normal"
```

```tsx
import * as jwt from "jsonwebtoken";

export class Authenticator {
  private static EXPIRES_IN = "1min";
  public generateToken(input: AuthenticationData): string {
    const token = jwt.sign(
      {
        id: input.id,
        role: input.role,
      },
      process.env.JWT_KEY as string,
      {
        expiresIn: Authenticator.EXPIRES_IN,
      }
    );
    return token;
  }

  public getData(token: string): AuthenticationData {
    const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
    const result = {
      id: payload.id,
      role: payload.role,
    };
    return result;
  }
}

interface AuthenticationData {
  id: string;
  role: string;
}
```

app.post("/signup", async (req: Request, res: Response) => {
try {
const userData = {
email: req.body.email,
password: req.body.password,
role: req.body.role,
};

    const idGenerator = new IdGenerator();
    const id = idGenerator.generate();

    const hashManager = new HashManager();
    const hashPassword = await hashManager.hash(userData.password);

    const userDb = new UserDatabase();
    await userDb.createUser(id, userData.email, hashPassword, userData.role);

    const authenticator = new Authenticator();
    const token = authenticator.generateToken({
      id,
      role: userData.role,
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

app.post("/login", async (req: Request, res: Response) => {
try {
if (!req.body.email || req.body.email.indexOf("@") === -1) {
throw new Error("Invalid email");
}

    const userData = {
      email: req.body.email,
      password: req.body.password,
    };

    const userDatabase = new UserDatabase();
    const user = await userDatabase.getUserByEmail(userData.email);

    const hashManager = new HashManager();
    const comapreResult = await hashManager.compare(
      userData.password,
      user.password
    );

    if (!comapreResult) {
      throw new Error("Invalid password");
    }

    const authenticator = new Authenticator();
    const token = authenticator.generateToken({
      id: user.id,
      role: user.role,
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

app.get("/user/profile", async (req: Request, res: Response) => {
try {
const token = req.headers.authorization as string;

    const authenticator = new Authenticator();
    const authenticationData = authenticator.getData(token);

    if (authenticationData.role !== "normal") {
      throw new Error("Only a normal user can access this funcionality");
    }

    const userDb = new UserDatabase();
    const user = await userDb.getUserById(authenticationData.id);

    res.status(200).send({
      id: user.id,
      email: user.email,
      role: authenticationData.role,
    });

} catch (err) {
res.status(400).send({
message: err.message,
});
}
});

# 5

public async deleteUser(id: string): Promise<any> {
await this.connection
.delete()
.from(UserDatabase.TABLE_NAME)
.where({ id });
}

app.delete("/user/:id", async (req: Request, res: Response) => {
try {
const token = req.headers.authorization as string;

    const authenticator = new Authenticator();
    const authenticationData = authenticator.getData(token);

    if (authenticationData.role !== "admin") {
      throw new Error("Only a admin user can access this funcionality");
    }

    const id = req.params.id;

    const userDatabase = new UserDatabase();
    await userDatabase.deleteUser(id);

    res.sendStatus(200);

} catch (err) {
res.status(400).send({
message: err.message,
});
}
await BaseDatabase.destroyConnection();
});

# 6

app.get("/user/:id", async (req: Request, res: Response) => {
try {
const token = req.headers.authorization as string;

    const authenticator = new Authenticator();
    authenticator.getData(token);
    	// a gente PRECISA verificar se o token não está expirado

    const id = req.params.id;

    const userDatabase = new UserDatabase();
    const user = await userDatabase.getUserById(id);

    res.status(200).send({
      id: user.id,
      email: user.email,
      role: user.role,
    });

} catch (err) {
res.status(400).send({
message: err.message,
});
}

});

# 7

import knex from "knex";
import Knex from "knex";

export abstract class BaseDatabase {
private static connection: Knex | null = null;

protected getConnection(): Knex {
if (BaseDatabase.connection === null) {
BaseDatabase.connection = knex({
client: "mysql",
connection: {
host: process.env.DB_HOST,
port: 3306,
user: process.env.DB_USER,
password: process.env.DB_PASSWORD,
database: process.env.DB_DATABASE_NAME,
},
});
}
return BaseDatabase.connection;
}

public static async destroyConnection(): Promise<void> {
if (BaseDatabase.connection) {
await BaseDatabase.connection.destroy();
BaseDatabase.connection = null;
}
}
}

public async createUser(
id: string,
email: string,
password: string,
role: string
): Promise<void> {
await this.getConnection()
.insert({
id,
email,
password,
role,
}).into("User")

app.post("/login", async (req: Request, res: Response) => {
try {
/\*
_ Implementações
_/

    res.status(200).send({
      token,
    });

} catch (err) {
res.status(400).send({
message: err.message,
});
}

await BaseDatabase.destroyConnection();
});
