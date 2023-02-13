import { z } from 'zod'

const formatErrors = (
  /** @type {import('zod').ZodFormattedError<Map<string,string>,string>} */
  errors
) =>
  Object.entries(errors)
    .map(([name, value]) => {
      if (value && '_errors' in value) return `${name}: ${value._errors.join(', ')}\n`
    })
    .filter(Boolean)

export const envSchema = z.object({
  NEXT_PUBLIC_GOOGLE_ANALYTICS: z.string(),
  NEXT_PUBLIC_GOOGLE_ANALYTICS_UNIVERSAL: z.string(),
  BASE_URL: z.string(),
  DECRYPTION_SECRET: z.string(),
  ENV_VALIDATION: z.literal('true').optional(),
})

const env = envSchema.safeParse(process.env)

if (!env.success) {
  console.error('Invalid environment variables:\n', ...formatErrors(env.error.format()))
  process.exit(1)
}
