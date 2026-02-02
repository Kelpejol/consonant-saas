import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log('Setting up TimescaleDB hypertables...');

    try {
        // Enable TimescaleDB extension if not already enabled
        // Note: This requires superuser privileges or the extension to be pre-installed
        await prisma.$executeRawUnsafe('CREATE EXTENSION IF NOT EXISTS timescaledb CASCADE;');
        console.log('TimescaleDB extension verified.');

        // Convert requests table to hypertable
        await prisma.$executeRawUnsafe("SELECT create_hypertable('requests', 'created_at', if_not_exists => TRUE);");
        console.log('Hypertable created for requests.');

        // Convert transactions table to hypertable
        await prisma.$executeRawUnsafe("SELECT create_hypertable('transactions', 'created_at', if_not_exists => TRUE);");
        console.log('Hypertable created for transactions.');

    } catch (error) {
        console.error('Failed to setup hypertables:', error);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
}

main();
