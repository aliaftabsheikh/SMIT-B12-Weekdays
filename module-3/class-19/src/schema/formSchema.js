import z from 'zod'

export const formSchema = z.object({
    email: z.string().email({ message: "Valid email address is required" }).nonempty({message: "Email is Required"}),

    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" })
      .max(16, { message: "Password cannot exceed 16 characters" })
      .nonempty({ message: "Password is required" }),
  });