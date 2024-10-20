import { z } from "@hono/zod-openapi";

// ChatRoom schema
const chatRoomSchema = z
  .object({
    chat_room_id: z.string(),
    user_id: z.string(),
    advisor_id: z.string().optional(),
    created_at: z.string(),
  })
  .describe("ChatRoom");

const chatRoomParams = chatRoomSchema
  .pick({ user_id: true, advisor_id: true })
  .openapi({
    example: {
      user_id: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      advisor_id: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    },
    required: ["user_id", "advisor_id"],
  })
  .describe("ChatRoomParams");

const chatRoomRequestBody = chatRoomSchema
  .omit({ chat_room_id: true, created_at: true })
  .openapi({
    example: {
      user_id: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      advisor_id: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    },
    required: ["user_id"],
  })
  .describe("ChatRoomRequestBody");

export { chatRoomSchema, chatRoomParams, chatRoomRequestBody };
