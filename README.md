# Prisma-Express

##Comments

1. npm init -y
2. npm install express
3. npm install prisma
4. npx prisma init --datasource-provider mysql
5. npm i @prisma/client
6. prisma db pull - (Turn Your Database Schema Into a Prisma Schema)
7. prisma validate
9. prisma generate
10.prisma studio

##EXTRA

1.  Prisma schema validation

##Details

// 1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
// 2. Set the provider of the datasource block in schema.prisma to match your database: postgresql, mysql, sqlite, sqlserver, mongodb or cockroachdb.
// 3. Run prisma db pull to turn your database schema into a Prisma schema.
// 4. Run prisma generate to generate the Prisma Client. You can then start querying your database.
// https://pris.ly/d/getting-started
