import { PrismaClient } from "@prisma/client"
import { PrismaPg } from "@prisma/adapter-pg"
import pg from "pg"

const globalForPrisma = global as unknown as { prisma: PrismaClient }

const connectionString = `${process.env.DATABASE_URL}`

const pool = new pg.Pool({
    connectionString,
    max: 20, // Maximum number of connections in the pool
    idleTimeoutMillis: 30000, // Close idle connections after 30 seconds
    connectionTimeoutMillis: 2000, // Return an error if a connection cannot be established within 2 seconds
})
const adapter = new PrismaPg(pool)

export const prisma =
    globalForPrisma.prisma ||
    new PrismaClient({
        adapter: adapter,
        log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
    })

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma
