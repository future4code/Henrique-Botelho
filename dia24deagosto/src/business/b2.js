public async createUser(
    id: string,
    email: string,
    name: string,
    password: string,
		role: string //opcional criar ENUM
  ): Promise<void> {
    try {
      await this.getConnection()
        .insert({
          id,
          email,
          name,
          password,
					role
        })
        .into(UserDatabase.TABLE_NAME);
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }