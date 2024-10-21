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

const attachmentListResponse = z.object({
  attachments: z.array(attachmentSchema),
});

const attachmentIDResponse = attachmentSchema.pick({ attachment_id: true });

const attachmentParams = attachmentSchema
  .pick({ attachment_id: true, message_id: true })
  .openapi({
    required: ["attachment_id"],
    example: {
      attachment_id: "550e8400-e29b-41d4-a716-446655440002",
      message_id: "550e8400-e29b-41d4-a716-446655440000",
    },
  })
  .describe("AttachmentParams");

const attachmentRequestBody = attachmentSchema
  .omit({ attachment_id: true, created_at: true })
  .describe("AttachmentRequestBody");

export {
  attachmentIDResponse,
  attachmentSchema,
  attachmentListResponse,
  attachmentParams,
  attachmentRequestBody,
};
