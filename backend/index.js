const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  try {
    await prisma.$connect();

    await prisma.user.create({
      data: {
        name: "John Doe",
        email: "john@prisma.io",
        password: "password",
      },
    });

    await prisma.user.create({
      data: {
        name: "Alice",
        email: "alice@prisma.io",
        password: "password",
      },
    });

    await prisma.user.create({
      data: {
        name: "Sarah Molina",
        email: "sarah@prisma.io",
        password: "password",
      },
    });

    const users = await prisma.user.findMany();
    console.dir(users, { depth: users });
  } catch (error) {
    console.log(error);
    console.log("keys: ", Object.keys(error));
    console.log("error.errorCode: ", error.errorCode);
    console.log("error.code: ", error.code);
    console.error(JSON.stringify(error, null, 2));
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
