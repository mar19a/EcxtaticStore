import { z } from 'zod'

export const QueryValidator = z.object({
  category: z.string().optional(),
