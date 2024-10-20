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

const CommentIDResponse = commentSchema.pick({ comment_id: true });

const commentListResponse = z.object({
  comments: z.array(commentSchema),
});
const commentParams = commentSchema
  .pick({ comment_id: true })
  .openapi({
    required: ["comment_id"],
    example: {
      comment_id: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    },
  })
  .describe("CommentParams");

const commentRequestBody = commentSchema
  .omit({ comment_id: true, created_at: true })
  .openapi({
    required: ["user_id", "post_id", "content"],
  })
  .describe("CommentRequestBody");

export {
  CommentIDResponse,
  commentSchema,
  commentListResponse,
  commentParams,
  commentRequestBody,
};
