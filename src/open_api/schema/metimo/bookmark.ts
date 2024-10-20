import { z } from "@hono/zod-openapi";
// Bookmark schema
const bookmarkSchema = z
  .object({
    bookmark_id: z.string(),
    user_id: z.string(),
    post_id: z.string(),
    created_at: z.date(),
  })
  .describe("Bookmark");
const bookmarkParams = z
  .object({
    bookmark_id: z
      .string()
      .openapi({ example: "550e8400-e29b-41d4-a716-446655440002" }),
  })
  .describe("BookmarkParams");

const bookmarkRequestBody = bookmarkSchema.omit({ bookmark_id: true }).openapi({
  required: ["user_id", "post_id"],
});

export { bookmarkSchema, bookmarkParams, bookmarkRequestBody };
