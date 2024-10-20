import { z } from "@hono/zod-openapi";
// PaymentHistory schema
const paymentHistorySchema = z
  .object({
    payment_id: z.string(),
    user_id: z.string(),
    amount: z.number(),
    payment_type: z.string(),
    created_at: z.string(),
  })
  .describe("PaymentHistory");

const paymentHistoryParams = z
  .object({
    payment_id: z
      .string()
      .openapi({ example: "550e8400-e29b-41d4-a716-446655440002" }),
  })
  .describe("PaymentHistoryParams");

// Request body for creating a payment history
const paymentHistoryRequestBody = paymentHistorySchema
  .omit({ payment_id: true })
  .openapi({
    required: ["user_id", "amount", "payment_type"],
  })
  .describe("PaymentHistoryRequestBody");

export {
  paymentHistorySchema,
  paymentHistoryParams,
  paymentHistoryRequestBody,
};
