import { Redis } from "@upstash/redis";

import { ImageInfo } from "@/types/imageInfo";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

export async function setCashedImages(key: string, value: ImageInfo[]){
  const k = `assignment5-1.${key}`
  await redis.set(k, value)
  await redis.expire(k, 7*24*60*60)
}

export async function getCashedImages(key: string): Promise<ImageInfo[] | null>{
  const k = `assignment5-1.${key}`
  return await redis.get(k)
}
