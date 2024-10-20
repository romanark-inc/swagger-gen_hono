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

const paymentHistoryIDResponse = paymentHistorySchema.pick({
  payment_id: true,
});

const paymentHistoryListResponse = z.object({
  payment_histories: z.array(paymentHistorySchema),
});

const paymentHistoryParams = paymentHistorySchema
  .pick({ payment_id: true })
  .openapi({
    required: ["payment_id"],
    example: {
      payment_id: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    },
  })
  .describe("PaymentHistoryParams");

// Request body for creating a payment history
const paymentHistoryRequestBody = paymentHistorySchema
  .omit({ payment_id: true, created_at: true })
  .openapi({
    required: ["user_id", "amount", "payment_type"],
  })
  .describe("PaymentHistoryRequestBody");

export {
  paymentHistoryIDResponse,
  paymentHistorySchema,
  paymentHistoryListResponse,
  paymentHistoryParams,
  paymentHistoryRequestBody,
};
