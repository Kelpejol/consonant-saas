import { prisma } from "@/lib/prisma"

// We re-export prisma to be used in auth.config or other server-only locations
// Note: This file itself shouldn't be imported in middleware
export { prisma }
