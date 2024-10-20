import {
  paymentHistoryIDResponse,
  paymentHistorySchema,
  paymentHistoryListResponse,
  paymentHistoryParams,
  paymentHistoryRequestBody,
} from "./schema";
import { getRoute, postRoute, putRoute, deleteRoute } from "../../util";

const PaymentHistoryCreateRoute = postRoute({
  path: "payment_histories",
  requestBodySchema: paymentHistoryRequestBody,
  responsesSchema: paymentHistoryIDResponse,
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
  responsesSchema: paymentHistoryIDResponse,
});

const PaymentHistoryDeleteRoute = deleteRoute({
  path: "payment_histories/{payment_history_id}",
  paramsSchema: paymentHistoryParams,
  responsesSchema: paymentHistoryIDResponse,
});

export const PaymentHistoryRoutes = [
  PaymentHistoryCreateRoute,
  PaymentHistoryAllGetRoute,
  PaymentHistoryGetByIDRoute,
  PaymentHistoryUpdateRoute,
  PaymentHistoryDeleteRoute,
];
