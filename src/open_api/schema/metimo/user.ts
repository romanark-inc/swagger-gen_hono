import { z } from "@hono/zod-openapi";

const genderEnum = z.enum(["male", "female", "other"]);

// User schema
const userSchema = z
  .object({
    user_id: z.string(),
    name: z.string(),
    email: z.string().email(),
    password_hash: z.string(),
    profile_picture: z.string().optional(),
    bio: z.string().optional(),
    gender: genderEnum.optional(),
    last_login: z.string().optional(),
    is_advisor: z.boolean().default(false),
    credit_balance: z.number().default(0),
    is_subscriber: z.boolean().default(false),
    created_at: z.string(),
    updated_at: z.string(),
  })
  .openapi({
    required: ["name", "email", "password_hash"],
  })
  .describe("User");

const userRequestBody = userSchema
  .omit({ user_id: true })
  .openapi({
    required: ["name", "email", "password_hash"],
  })
  .describe("UserRequestBody");

const userParams = z
  .object({
    user_id: z.string().openapi({
      example: "550e8400-e29b-41d4-a716-446655440000",
    }),
  })
  .openapi({
    required: ["user_id"],
  })
  .describe("UserParams");

export { userSchema, userRequestBody, userParams };
