import { Redis } from "@upstash/redis";

export const db = new Redis({
  url: "https://apn1-accurate-guppy-33045.upstash.io",
  token:
    "AYEVACQgMjZjMTc2N2MtYzIyNi00ODQ2LWE2ZmUtMGIyNDIxMTk1NDIxNzZhMzcyODFkZDYxNGYzZjlhODA2YjAyNjhkNzA1NTU=",
});
