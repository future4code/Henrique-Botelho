async getUserByEmail(user) {

    const userDatabase = new UserDatabase();
    const userFromDB = await userDatabase.getUserByEmail(user.email);

    const hashManager = new HashManager();
    const hashCompare = await hashManager.compare(user.password, userFromDB.getPassword());

    const authenticator = new Authenticator();
    const accessToken = authenticator.generateToken({ id: userFromDB.getId()});

    if (!hashCompare) {
        throw new Error("Invalid Password!");
    }

    return accessToken;
}