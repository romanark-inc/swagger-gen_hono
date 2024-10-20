import { z } from "@hono/zod-openapi";
// Message schema
const messageSchema = z
  .object({
    message_id: z.string(),
    chat_room_id: z.string(),
    sender_id: z.string(),
    content: z.string(),
    timestamp: z.string(),
    is_read: z.boolean().default(false),
    created_at: z.string(),
  })
  .describe("Message");

const messageParams = z
  .object({
    message_id: z
      .string()
      .openapi({ example: "550e8400-e29b-41d4-a716-446655440002" }),
  })
  .describe("MessageParams");
// Request body for creating a message
const messageRequestBody = messageSchema
  .omit({ message_id: true })
  .openapi({
    required: ["chat_room_id", "sender_id", "content"],
  })
  .describe("MessageRequestBody");

export { messageSchema, messageParams, messageRequestBody };
