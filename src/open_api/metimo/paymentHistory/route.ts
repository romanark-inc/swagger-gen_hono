import {
  paymentHistoryIDResponse,
  paymentHistorySchema,
  paymentHistoryListResponse,
  paymentHistoryParams,
  paymentHistoryRequestBody,
} from "./schema";
import { getRoute, postRoute, putRoute, deleteRoute } from "../../util";
import { getListQuery } from "../../schema/query";

const PaymentHistoryCreateRoute = postRoute({
  path: "payment_histories",
  requestBodySchema: paymentHistoryRequestBody,
  responsesSchema: paymentHistoryIDResponse,
  tags: "PaymentHistories",
  summary: "payment history作成",
  description: "payment history作成",
});

const PaymentHistoryAllGetRoute = getRoute({
  path: "payment_histories",
  querySchema: getListQuery,
  responsesSchema: paymentHistoryListResponse,
  tags: "PaymentHistories",
  summary: "payment history一覧取得",
  description: "payment history一覧取得",
});

const PaymentHistoryGetByIDRoute = getRoute({
  path: "payment_histories/{payment_history_id}",
  paramsSchema: paymentHistoryParams,
  responsesSchema: paymentHistorySchema,
  tags: "PaymentHistories",
  summary: "payment history取得",
  description: "payment history取得",
});

const PaymentHistoryUpdateRoute = putRoute({
  path: "payment_histories/{payment_history_id}",
  paramsSchema: paymentHistoryParams,
  requestBodySchema: paymentHistoryRequestBody,
  responsesSchema: paymentHistoryIDResponse,
  tags: "PaymentHistories",
  summary: "payment history更新",
  description: "payment history更新",
});

const PaymentHistoryDeleteRoute = deleteRoute({
  path: "payment_histories/{payment_history_id}",
  paramsSchema: paymentHistoryParams,
  responsesSchema: paymentHistoryIDResponse,
  tags: "PaymentHistories",
  summary: "payment history削除",
  description: "payment history削除",
});

export const PaymentHistoryRoutes = [
  PaymentHistoryCreateRoute,
  PaymentHistoryAllGetRoute,
  PaymentHistoryGetByIDRoute,
  PaymentHistoryUpdateRoute,
  PaymentHistoryDeleteRoute,
];
