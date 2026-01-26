
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
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

    // 3. Create Customers
    const customers = [
        { externalId: 'cust_001', name: 'Acme Corp', email: 'billing@acme.com' },
        { externalId: 'cust_002', name: 'Stark Industries', email: 'pepper@stark.com' },
        { externalId: 'cust_003', name: 'Wayne Ent', email: 'bruce@wayne.com' },
        { externalId: 'cust_004', name: 'Vampire AI', email: 'dracula@vampire.ai' }, // High usage, low balance
    ]

    for (const cData of customers) {
        const customer = await prisma.customer.upsert({
            where: {
                organizationId_externalId: {
                    organizationId: org.id,
                    externalId: cData.externalId
                }
            },
            update: {},
            create: {
                ...cData,
                organizationId: org.id,
                balanceGrains: BigInt(5000000), // 5M grains
                totalSpent: BigInt(5000000),
            }
        })

        // Add some random transaction history
        for (let i = 0; i < 10; i++) {
            const date = new Date()
            date.setDate(date.getDate() - i)

            const usage = cData.externalId === 'cust_004' ? 1000000 : 200000 // Vampire uses 5x more

            await prisma.transaction.create({
                data: {
                    customerId: customer.id,
                    amountGrains: BigInt(-usage),
                    type: 'USAGE',
                    providerModel: 'gpt-4o',
                    createdAt: date
                }
            })
        }

        // Update balance
        const currentUsage = cData.externalId === 'cust_004' ? BigInt(-10000000) : BigInt(-2000000)
        await prisma.customer.update({
            where: { id: customer.id },
            data: {
                balanceGrains: { increment: currentUsage }
            }
        })
    }

    console.log('Seed completed.')
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
