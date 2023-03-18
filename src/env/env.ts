import type { z } from 'zod'
import type { envSchema } from './env.mjs'

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envSchema> {}
  }
}
