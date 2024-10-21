import {
  messageIDResponse,
  messageSchema,
  messageParams,
  messageRequestBody,
  massageListResponse,
} from "./schema";
import { getRoute, postRoute, putRoute, deleteRoute } from "../../util";

const MessageCreateRoute = postRoute({
  path: "messages",
  requestBodySchema: messageRequestBody,
  responsesSchema: messageIDResponse,
  tags: "Messages",
  summary: "message作成",
  description: "message作成",
});

const MessageGetAllRoute = getRoute({
  path: "messages",
  responsesSchema: massageListResponse,
  tags: "Messages",
  summary: "message一覧取得",
  description: "message一覧取得",
});

const MessageGetByIDRoute = getRoute({
  path: "messages/{message_id}",
  paramsSchema: messageParams,
  responsesSchema: messageSchema,
  tags: "Messages",
  summary: "message取得",
  description: "message取得",
});

const MessageUpdateRoute = putRoute({
  path: "messages/{message_id}",
  paramsSchema: messageParams,
  requestBodySchema: messageRequestBody,
  responsesSchema: messageIDResponse,
  tags: "Messages",
  summary: "message更新",
  description: "message更新",
});

const MessageDeleteRoute = deleteRoute({
  path: "messages/{message_id}",
  paramsSchema: messageParams,
  responsesSchema: messageIDResponse,
  tags: "Messages",
  summary: "message削除",
  description: "message削除",
});

export const MessageRoutes = [
  MessageCreateRoute,
  MessageGetAllRoute,
  MessageGetByIDRoute,
  MessageUpdateRoute,
  MessageDeleteRoute,
];
