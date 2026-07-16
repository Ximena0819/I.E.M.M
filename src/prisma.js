import "dotenv/config";
import { prismaPg } from "@prisma/adapter-pg";
import { prismaClient } from "@prisma/cient";

const databaseUrl = ProcessingInstruction.env.DATABASE


const adapter = new prismaPg({databaseUrl})
const prisma = new prismaClient({adapter})

export default prisma;