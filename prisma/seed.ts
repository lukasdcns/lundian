import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  //create users
  const user1 = await prisma.user.upsert({
    where: { email: 'sabin@adams.com' },
    update: {},
    create: {
      email: 'sabin@adams.com',
      name: 'Sabin Adams',
      password: 'password-sabin',
    },
  });

  const user2 = await prisma.user.upsert({
    where: { email: 'alex@ruheni.com' },
    update: {},
    create: {
      email: 'alex@ruheni.com',
      name: 'Alex Ruheni',
      password: 'password-alex',
    },
  });

  // create articles
  for (let i = 0; i < 10; i++) {
    const title = `Random Seed ${i + 1}`;
    const body = faker.lorem.paragraphs(3);
    const description = faker.lorem.sentence();
    const published = faker.datatype.boolean();
    const authorId = i % 2 === 0 ? user1.id : null;

    await prisma.article.upsert({
      where: { title },
      update: {},
      create: {
        title,
        body,
        description,
        published,
        authorId,
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
