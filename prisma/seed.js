import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const evento = await prisma.evento.create({
    data: {
      nome: 'Show Exemplo',
      data: new Date('2025-07-01T21:00:00'),
    },
  });

  const setor = await prisma.setor.create({
    data: {
      nome: 'VIP',
      eventoId: evento.id,
    },
  });

  for (let i = 1; i <= 50; i++) {
    await prisma.lugar.create({
      data: {
        numero: `A${i}`,
        setorId: setor.id,
      },
    });
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
