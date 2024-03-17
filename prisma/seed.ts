import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles
  for (let i = 0; i < 10; i++) {
    const title = `Random Seed ${i + 1}`;
    const body = faker.lorem.paragraphs(3);
    const description = faker.lorem.sentence();
    const published = faker.datatype.boolean();

    await prisma.article.upsert({
      where: { title },
      update: {},
      create: {
        title,
        body,
        description,
        published,
      },
    });
  }
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });