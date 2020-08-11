# 1

a) Deleta a coluna Salário

b) Altera a coluna gênero para nome ser sex e o tipo varchar(6)

c) altera o tipo para varchar(255)

# 2

a)

UPDATE Actor
SET 
	name = "Moacyr Franco",
	birth_date = "2020-02-10"
WHERE id = "003";

b) 

UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";

c)

UPDATE Actor
SET 
		name = "Moacyr Franco",
		birth_date = "2020-02-10",
    salary = 600000,
    gender = "male"
WHERE id = "005";

# 3

a)
DELETE FROM Actor WHERE name = "Fernanda Montenegro";

b) DELETE FROM Actor
WHERE
	gender = "male" AND
	salary > 1000000

# 4
a)
```sql
SELECT MAX(salary) FROM Actor
```
b)
```sql
SELECT MIN(salary) FROM Actor WHERE gender = "female"
```
c)
```sql
SELECT COUNT(*) FROM Actor WHERE gender = "female"
```

d)
```sql
SELECT SUM(salary) FROM Actor
```

# 5

a) Agrupa os elementos

b) 

SELECT id, name FROM Actor
ORDER BY name DESC;

c)

SELECT * FROM Actor
ORDER BY salary;

d) 
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;

e)

SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;

# 6

a)

```sql
ALTER TABLE Movie ADD playing_limit_date DATE;
```

b)

```sql
ALTER TABLE Movie CHANGE rating rating FLOAT;
```

c)

UPDATE Movie
SET
	playing_limit_date = "2020-12-31"
WHERE id = "001"

d) DELETE FROM Movie WHERE id = "001"

# 7

a)
```sql
SELECT COUNT(*) FROM Movie WHERE rating > 7.5;
```
b)
```sql
SELECT AVG(rating) FROM Movie;
```

c)

```sql
SELECT COUNT(*) FROM Movie WHERE playing_limit_date > CURDATE();
```

d)

```sql
SELECT COUNT(*) FROM Movie WHERE release_date < CURDATE();
```

e) 

```sql
SELECT MAX(rating) FROM Movie;
```

f)

```sql
SELECT MIN(rating) FROM Movie;
```

8)

a)

```sql
SELECT * FROM Movie ORDER BY title;
```

b)

```sql
SELECT * FROM Movie ORDER BY title LIMIT 5;
```

c)

SELECT * FROM Movie 
WHERE release_date < CURDATE() 
ORDER BY release_date DESC 
LIMIT 3;

d)

SELECT * FROM Movie 
ORDER BY rating DESC 
LIMIT 3;