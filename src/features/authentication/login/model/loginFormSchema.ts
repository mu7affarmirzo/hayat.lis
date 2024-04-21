import { z } from 'zod'

export const loginFormSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Password must be atleast 1 characters' }),
  password: z
    .string()
    .min(1, { message: 'Password must be atleast 1 characters' }),
})

export type LoginFormSchema = z.infer<typeof loginFormSchema>
