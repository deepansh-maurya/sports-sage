import { z } from "zod";

export const SignupFormSchema = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
});
export const LoginFormSchema = z.object({
  email: z.string(),
  password: z.string(),
});
