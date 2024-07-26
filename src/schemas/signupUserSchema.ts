import { z } from "zod";

export const signupUserSchema = z.object({
  username: z
    .string()
    .min(5, "Username must be at least 5 characters")
    .max(50)
    .regex(/^[a-zA-Z0-9]+$/, "Username can only contain letters and numbers"),
  email: z
    .string()
    .min(10)
    .max(50)
    .email()
    .regex(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please enter a valid email address"
    ),
  password: z
    .string()
    .min(6)
    .max(50)
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    ), 
});
