import { z } from "@hono/zod-openapi";

// Post schema
const postSchema = z
  .object({
    post_id: z.string(),
    user_id: z.string(),
    description: z.string().optional(),
    photo_urls: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
    view_count: z.number().default(0),
    created_at: z.string(),
    updated_at: z.string(),
  })
  .describe("Post");

const postParams = z
  .object({
    post_id: z
      .string()
      .openapi({ example: "550e8400-e29b-41d4-a716-446655440002" }),
  })
  .describe("PostParams");

const postRequestBody = postSchema
  .omit({ post_id: true })
  .openapi({
    required: ["user_id"],
  })
  .describe("PostRequestBody");

export { postSchema, postParams, postRequestBody };
