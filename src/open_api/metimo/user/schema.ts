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

const UserIDResponse = userSchema.pick({ user_id: true });

const userListResponse = z.object({
  users: z.array(userSchema),
});

const userRequestBody = userSchema
  .omit({
    user_id: true,
    created_at: true,
    updated_at: true,
    last_login: true,
    credit_balance: true,
    is_subscriber: true,
  })
  .openapi({
    required: ["name", "email", "password_hash"],
  })
  .describe("UserRequestBody");

const userParams = userSchema
  .pick({
    user_id: true,
  })
  .openapi({
    example: {
      user_id: "XXXXXXXX",
    },
    required: ["user_id"],
  })
  .describe("UserParams");

export {
  UserIDResponse,
  userSchema,
  userListResponse,
  userRequestBody,
  userParams,
};
