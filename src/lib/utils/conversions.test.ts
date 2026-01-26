import { describe, it, expect } from 'vitest';
import { grainsToDollars, dollarsToGrains, formatGrainDisplay } from './conversions';

describe('Grain Conversions', () => {
    it('correctly converts grains to dollars', () => {
        expect(grainsToDollars(100000)).toBe(1);
        expect(grainsToDollars(1000000)).toBe(10);
        expect(grainsToDollars(BigInt(500000))).toBe(5);
    });

    it('correctly converts dollars to grains', () => {
        expect(dollarsToGrains(1)).toBe(BigInt(100000));
        expect(dollarsToGrains(10.5)).toBe(BigInt(1050000));
    });

    it('formats grain display strings accurately', () => {
        expect(formatGrainDisplay(500)).toBe('500');
        expect(formatGrainDisplay(1500)).toBe('1.5K');
        expect(formatGrainDisplay(2750000)).toBe('2.75M');
    });
});
