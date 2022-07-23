import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const takuaka = await prisma.user.create({
    data: {
      id: "user-id-1",
      name: "takuaka",
      email: "example.com",
    },
  });

  const takuami = await prisma.user.create({
    data: {
      id: "user-id-3",
      name: "takuaka",
      email: "example.acom",
    },
  });

  const takumi2 = await prisma.user.create({
    data: {
      id: "user-id-4",
      name: "takuaka",
      email: "examdple.com",
    },
  });

  const akasaka = await prisma.user.create({
    data: {
      id: "user-id-2",
      name: "sakasu",
      email: "example1.com",
    },
  });

  await prisma.user.createMany({
    data: [
      { id: "user-id-11", email: "gmail.comcom", name: "takumin" },
      { id: "user-id-12", email: "gmails.comcom", name: "takumien" },
      { id: "user-id-13", email: "gmailss.comcom", name: "takumiend" },
    ],
  });
}
