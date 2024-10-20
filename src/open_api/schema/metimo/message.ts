import { z } from "@hono/zod-openapi";
// Message schema
const messageSchema = z
  .object({
    message_id: z.string(),
    chat_room_id: z.string(),
    sender_id: z.string(),
    content: z.string(),
    is_read: z.boolean().default(false),
    created_at: z.string(),
  })
  .describe("Message");

const messageParams = messageSchema
  .pick({ message_id: true })
  .openapi({
    required: ["message_id"],
    example: {
      message_id: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    },
  })
  .describe("MessageParams");
// Request body for creating a message
const messageRequestBody = messageSchema
  .omit({ message_id: true, created_at: true, is_read: true })
  .openapi({
    required: ["chat_room_id", "sender_id", "content"],
  })
  .describe("MessageRequestBody");

export { messageSchema, messageParams, messageRequestBody };
