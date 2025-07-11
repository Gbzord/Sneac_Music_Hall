import { prisma } from '@/lib/prisma';

export default async function handler(req, res) {
  const { setorId } = req.query;

  const lugares = await prisma.lugar.findMany({
    where: { setorId: Number(setorId) }
  });

  res.status(200).json(lugares);
}
