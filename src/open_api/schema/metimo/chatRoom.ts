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

const chatRoomParams = z
  .object({
    chat_room_id: z
      .string()
      .openapi({ example: "550e8400-e29b-41d4-a716-446655440002" }),
  })
  .describe("ChatRoomParams");

// Request body for creating a chat room
const chatRoomRequestBody = chatRoomSchema
  .omit({ chat_room_id: true })
  .openapi({
    required: ["user_id", "advisor_id"],
  })
  .describe("ChatRoomRequestBody");

export { chatRoomSchema, chatRoomParams, chatRoomRequestBody };
