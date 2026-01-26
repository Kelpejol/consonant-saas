/**
 * Grain conversion utilities for Consonant SaaS
 * 1 Million Grains = $10.00 (Standard Tier)
 */

export const GRAINS_PER_DOLLAR = 100000;

export function grainsToDollars(grains: number | bigint): number {
    return Number(grains) / GRAINS_PER_DOLLAR;
}

export function dollarsToGrains(dollars: number): bigint {
    return BigInt(Math.floor(dollars * GRAINS_PER_DOLLAR));
}

export function formatGrainDisplay(grains: number | bigint): string {
    const num = Number(grains);
    if (num >= 1000000) return `${(num / 1000000).toFixed(2)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toLocaleString();
}
