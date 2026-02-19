import { z } from "zod";

const userSchema = z.object({
    email: z.email({ message: "Invalid email address" }),
    password: z
        .string()
        .min(8, { message: "Password must be at least 8 characters long" })
        .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
        .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
        .regex(/[0-9]/, { message: "Password must contain at least one number" })
        .regex(/[^A-Za-z0-9]/, { message: "Password must contain at least one special character" }),
    pseudo: z
        .string()
        .min(3, { message: "Username must be at least 3 characters long" })
        .max(20, { message: "Username cannot exceed 20 characters" }),
    firstName: z
        .string()
        .min(1, { message: "First name is required" })
        .max(50, { message: "First name is too long" }),
    lastName: z
        .string()
        .min(1, { message: "Last name is required" })
        .max(50, { message: "Last name is too long" }),
});