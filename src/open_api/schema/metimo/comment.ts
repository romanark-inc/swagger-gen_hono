import { z } from "@hono/zod-openapi";

// Comment schema
const commentSchema = z
  .object({
    comment_id: z.string(),
    user_id: z.string(),
    post_id: z.string(),
    content: z.string(),
    created_at: z.date(),
  })
  .describe("Comment");

const commentParams = z
  .object({
    comment_id: z
      .string()
      .openapi({ example: "550e8400-e29b-41d4-a716-446655440002" }),
  })
  .describe("CommentParams");

const commentRequestBody = commentSchema
  .omit({ comment_id: true })
  .openapi({
    required: ["user_id", "post_id", "content"],
  })
  .describe("CommentRequestBody");

export { commentSchema, commentParams, commentRequestBody };
