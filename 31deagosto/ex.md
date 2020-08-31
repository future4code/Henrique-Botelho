# 1
interface User {
	name: string
	balance: number
}
function performPurchase(user: User, value: number): User | undefined {
	if(user.balance >= value) {
		return {
			...user,
			balance: user.balance - value		
		}
	}
	return undefined
}

# 2

test("Testing balance greater than value", () => {
	const user: User = {
		name: "Astrodev",
		balance: 100
	}

	const result = performPurchase(user, 50)
	
	expect(result).toEqual({
		...user,
		balance: 50
	})
})

test("Testing balance greater than value", () => {
	const user: User = {
		name: "Astrodev",
		balance: 50
	}

	const result = performPurchase(user, 50)
	
	expect(result).toEqual({
		...user,
		balance: 0
	})
})

test("Testing balance greater than value", () => {
	const user: User = {
		name: "Astrodev",
		balance: 30
	}

	const result = performPurchase(user, 50)
	
	expect(result).toEqual(undefined)
})

# 3

export function verifyAge(casino: Casino, users: User[]): Result {
  const allowed: User[] = [];
  const unallowed: User[] = [];

  for (const user of users) {
    if (casino.location === LOCATION.EUA) {
      if (user.age >= 21) {
        allowed.push(user);
      } else {
        unallowed.push(user);
      }
    } else if (casino.location === LOCATION.BRAZIL) {
      if (user.age >= 18) {
        allowed.push(user);
      } else {
        unallowed.push(user);
      }
      break;
    }
  }

  return {
    brazilians: {
      allowed: allowed
        .filter((user) => user.nacionality === NACIONALITY.BRAZILIAN)
        .map((u) => u.name),
      unallowed: unallowed
        .filter((user) => user.nacionality === NACIONALITY.BRAZILIAN)
        .map((u) => u.name),
    },
    americans: {
      allowed: allowed
        .filter((user) => user.nacionality === NACIONALITY.AMERICAN)
        .map((u) => u.name),
      unallowed: unallowed
        .filter((user) => user.nacionality === NACIONALITY.AMERICAN)
        .map((u) => u.name),
    },
  };
}

# 4

test("1 brazilian allowed", () => {
    const brazilian: User = {
      name: "Astrodev",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const casino: Casino = {
      name: "Balada Estelar",
      location: LOCATION.BRAZIL,
    };
    
    const result = verifyAge(casino, [brazilian]);
    expect(result.brazilians.allowed).toEqual(["Astrodev"]);
  });

  test("1 american allowed", () => {
    const brazilian: User = {
      name: "Astrodev",
      age: 19,
      nacionality: NACIONALITY.AMERICAN,
    };

    const casino: Casino = {
      name: "Balada Estelar",
      location: LOCATION.BRAZIL,
    };
    
    const result = verifyAge(casino, [brazilian]);
    expect(result.americans.allowed).toEqual(["Astrodev"]);
  });

  test("No one allowed", () => {
    const brazilian: User = {
      name: "Astrodev BR",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const american: User = {
      name: "Astrodev EUA",
      age: 19,
      nacionality: NACIONALITY.AMERICAN,
    };
    
    const casino: Casino = {
      name: "Balada Estelar",
      location: LOCATION.EUA,
    };
    
    const result = verifyAge(casino, [
      brazilian,
      brazilian,
      american,
      american,
    ]);
    expect(result.brazilians.unallowed).toEqual(["Astrodev BR", "Astrodev BR"]);
    expect(result.americans.unallowed).toEqual([
      "Astrodev EUA",
      "Astrodev EUA",
    ]);
  });

  test("2 american allowed and 2 brazilians unallowed", () => {
    const brazilian: User = {
      name: "Astrodev BR",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const american: User = {
      name: "Astrodev EUA",
      age: 21,
      nacionality: NACIONALITY.AMERICAN,
    };
    
    const casino: Casino = {
      name: "Balada Estelar",
      location: LOCATION.EUA,
    };
    
    const result = verifyAge(casino, [
      brazilian,
      brazilian,
      american,
      american,
    ]);
    expect(result.brazilians.unallowed).toEqual(["Astrodev BR", "Astrodev BR"]);
    expect(result.americans.allowed).toEqual(["Astrodev EUA", "Astrodev EUA"]);
  });

  # 5 

  test("1 brazilian allowed", () => {
    const brazilian: User = {
      name: "Astrodev",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const casino: Casino = {
      name: "Balada Estelar",
      location: LOCATION.BRAZIL,
    };
    
    const result = verifyAge(casino, [brazilian]);
    expect(result.brazilians.allowed.length).toBeGreaterThan(0);
    expect(result.brazilians.allowed.length).toBeLessThan(2);
  });

  test("1 american allowed", () => {
    const brazilian: User = {
      name: "Astrodev",
      age: 19,
      nacionality: NACIONALITY.AMERICAN,
    };

    const casino: Casino = {
      name: "Balada Estelar",
      location: LOCATION.BRAZIL,
    };
    
    const result = verifyAge(casino, [brazilian]);
    expect(result.americans.unallowed.length).toBe(0);
  });

  test("No one allowed", () => {
    const brazilian: User = {
      name: "Astrodev BR",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const american: User = {
      name: "Astrodev EUA",
      age: 19,
      nacionality: NACIONALITY.AMERICAN,
    };
    
    const casino: Casino = {
      name: "Balada Estelar",
      location: LOCATION.EUA,
    };
    
    const result = verifyAge(casino, [
      brazilian,
      brazilian,
      american,
      american,
    ]);
    
    expect(result.brazilians.unallowed).toContain("Astrodev BR");
    expect(result.americans.unallowed).toContain("Astrodev EUA");
  });

  test("2 american allowed and 2 brazilians unallowed", () => {
    const brazilian: User = {
      name: "Astrodev BR",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const american: User = {
      name: "Astrodev EUA",
      age: 21,
      nacionality: NACIONALITY.AMERICAN,
    };
    
    const casino: Casino = {
      name: "Balada Estelar",
      location: LOCATION.EUA,
    };
    
    const result = verifyAge(casino, [
      brazilian,
      brazilian,
      american,
      american,
    ]);
    expect(result.brazilians.unallowed.length).toBeGreaterThan(1);
    expect(result.americans.unallowed.length).toBeLessThan(1);
    expect(result.americans.allowed.length).toBe(2);
  });


  #7 

  test("Create Post", async () => {
    try {
      const post = {
        id: "id do post",
        title: "Título",
        content: "Conteúdo",
      };

      await createPost(post);
      await createPost(post);
    } catch (err) {
      expect(err).not.toBe(undefined)
    }
  });