import { PrismaClient } from './generated/prisma/client';

const globalForPrisma = globalThis;

// @ts-ignore
const prisma = globalForPrisma.prisma || new PrismaClient();

// @ts-ignore
globalForPrisma.prisma = prisma;

export default prisma;
