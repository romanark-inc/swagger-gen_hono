import {
  paymentHistorySchema,
  paymentHistoryListResponse,
  paymentHistoryParams,
  paymentHistoryRequestBody,
} from "./schema";
import { getRoute, postRoute, putRoute, deleteRoute } from "../../util";

const PaymentHistoryCreateRoute = postRoute({
  path: "payment_histories",
  requestBodySchema: paymentHistoryRequestBody,
  responsesSchema: paymentHistorySchema,
});

const PaymentHistoryAllGetRoute = getRoute({
  path: "payment_histories",
  responsesSchema: paymentHistoryListResponse,
});

const PaymentHistoryGetByIDRoute = getRoute({
  path: "payment_histories/{payment_history_id}",
  paramsSchema: paymentHistoryParams,
  responsesSchema: paymentHistorySchema,
});

const PaymentHistoryUpdateRoute = putRoute({
  path: "payment_histories/{payment_history_id}",
  paramsSchema: paymentHistoryParams,
  requestBodySchema: paymentHistoryRequestBody,
  responsesSchema: paymentHistorySchema,
});

const PaymentHistoryDeleteRoute = deleteRoute({
  path: "payment_histories/{payment_history_id}",
  paramsSchema: paymentHistoryParams,
  responsesSchema: paymentHistorySchema,
});

export const PaymentHistoryRoutes = [
  PaymentHistoryCreateRoute,
  PaymentHistoryAllGetRoute,
  PaymentHistoryGetByIDRoute,
  PaymentHistoryUpdateRoute,
  PaymentHistoryDeleteRoute,
];
