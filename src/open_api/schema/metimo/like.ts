import { z } from "@hono/zod-openapi";
// Like schema
const likeSchema = z
  .object({
    like_id: z.string(),
    user_id: z.string(),
    post_id: z.string(),
    created_at: z.date(),
  })
  .describe("Like");

const likeParams = z
  .object({
    like_id: z
      .string()
      .openapi({ example: "550e8400-e29b-41d4-a716-446655440002" }),
  })
  .describe("LikeParams");

const likeRequestBody = likeSchema
  .omit({ like_id: true })
  .openapi({
    required: ["user_id", "post_id"],
  })
  .describe("LikeRequestBody");

export { likeSchema, likeParams, likeRequestBody };
