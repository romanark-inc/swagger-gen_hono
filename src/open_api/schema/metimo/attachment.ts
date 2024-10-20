import { z } from "@hono/zod-openapi";

// Attachment schema
const attachmentSchema = z
  .object({
    attachment_id: z.string(),
    message_id: z.string(),
    file_url: z.string(),
    created_at: z.string(),
  })
  .describe("Attachment");

const attachmentParams = z
  .object({
    attachment_id: z
      .string()
      .openapi({ example: "550e8400-e29b-41d4-a716-446655440002" }),
  })
  .describe("AttachmentParams");

// Request body for creating an attachment
const attachmentRequestBody = attachmentSchema
  .omit({ attachment_id: true })
  .openapi({
    required: ["message_id", "file_url", "file_type", "file_size"],
  })
  .describe("AttachmentRequestBody");

export { attachmentSchema, attachmentParams, attachmentRequestBody };
