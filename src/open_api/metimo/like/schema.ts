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

const likeListResponse = z.object({
  likes: z.array(likeSchema),
});
const likeParams = likeSchema
  .pick({ like_id: true })
  .openapi({
    required: ["like_id"],
    example: {
      like_id: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    },
  })
  .describe("LikeParams");

const likeRequestBody = likeSchema
  .omit({ like_id: true })
  .openapi({
    required: ["user_id", "post_id"],
  })
  .describe("LikeRequestBody");

export { likeSchema, likeListResponse, likeParams, likeRequestBody };
