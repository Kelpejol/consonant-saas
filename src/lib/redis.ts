import Redis from "ioredis";

const redisClientSingleton = () => {
    return new Redis(process.env.REDIS_URL as string);
};

declare global {
    var redis: undefined | ReturnType<typeof redisClientSingleton>;
}

const redis = globalThis.redis ?? redisClientSingleton();

export default redis;

if (process.env.NODE_ENV !== "production") globalThis.redis = redis;
