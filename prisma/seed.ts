import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'
import Redis from 'ioredis'
import crypto from 'crypto'

const prisma = new PrismaClient()
const redis = new Redis("rediss://:CRm3ENJWCxoSfJco9GtDKPbThIHSgHX8@redis-16934.c92.us-east-1-3.ec2.cloud.redislabs.com:16934")

async function main() {
    console.log('Starting seed...')

    // 1. Create a demo user
    const hashedPassword = await bcrypt.hash('password123', 10)
    const user = await prisma.user.upsert({
        where: { email: 'demo@consonant.ai' },
        update: {},
        create: {
            email: 'demo@consonant.ai',
            name: 'Demo Founder',
            password: hashedPassword,
        },
    })

    // 2. Create organization
    const org = await prisma.organization.upsert({
        where: { slug: 'demo-org' },
        update: {},
        create: {
            name: 'Demo AI Startup',
            slug: 'demo-org',
            ownerId: user.id,
            members: {
                create: {
                    userId: user.id,
                    role: 'owner'
                }
            }
        },
    })

    // 3. Create a Demo API Key
    const demoKey = "con_demo_key_123456789"
    const demoKeyHash = crypto.createHash('sha256').update(demoKey).digest('hex')

    const apiKey = await prisma.apiKey.upsert({
        where: { key: demoKey },
        update: { organizationId: org.id },
        create: {
            name: "Demo Key",
            key: demoKey,
            maskedKey: "con_demo...",
            organizationId: org.id,
        }
    })

    // Manually update the apiKeyHash using raw SQL if needed
    await prisma.$executeRaw`UPDATE api_keys SET api_key_hash = ${demoKeyHash} WHERE id = ${apiKey.id}`
    await redis.set(`apikey:${demoKeyHash}`, org.id)

    // 4. Create Customers
    const customers = [
        { id: '123e4567-e89b-12d3-a456-426614174000', externalId: 'cust_001', name: 'Acme Corp', email: 'billing@acme.com' },
        { id: '223e4567-e89b-12d3-a456-426614174000', externalId: 'cust_002', name: 'Stark Industries', email: 'pepper@stark.com' },
        { id: '323e4567-e89b-12d3-a456-426614174000', externalId: 'cust_003', name: 'Wayne Ent', email: 'bruce@wayne.com' },
        { id: '423e4567-e89b-12d3-a456-426614174000', externalId: 'cust_004', name: 'Vampire AI', email: 'dracula@vampire.ai' },
    ]

    for (const cData of customers) {
        const customer = await prisma.customer.upsert({
            where: { id: cData.id },
            update: {},
            create: {
                ...cData,
                organizationId: org.id,
            }
        })

        // Update balances using raw SQL to avoid type errors
        await prisma.$executeRaw`
            UPDATE customers 
            SET current_balance_grains = 5000000, 
                lifetime_spent_grains = 5000000 
            WHERE id = ${customer.id}
        `

        // Sync to Redis
        await redis.set(`customer:balance:${customer.id}`, "5000000")
        await redis.set(`customer:reserved:${customer.id}`, "0")

        // Add some random transaction history
        for (let i = 0; i < 5; i++) {
            const usage = cData.externalId === 'cust_004' ? 500000 : 100000
            await prisma.transaction.create({
                data: {
                    customerId: customer.id,
                    amountGrains: BigInt(-usage),
                    type: 'ai_usage',
                    providerModel: 'gpt-4o',
                    status: 'completed'
                }
            })
        }
    }

    console.log('Seed completed successfully.')
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
        await redis.quit()
    })
