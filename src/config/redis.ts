import { createClient } from "redis";
import dotenv from "dotenv";

dotenv.config();

const redisClient = createClient({
  url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`,
});

redisClient.on("error", (e) => console.log("Redis client error", e));
redisClient.on("connect", () => console.log("Redis client connected"));

await redisClient.connect();

export default redisClient;
