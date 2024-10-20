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
});

const MessageGetAllRoute = getRoute({
  path: "messages",
  responsesSchema: massageListResponse,
});

const MessageGetByIDRoute = getRoute({
  path: "messages/{message_id}",
  paramsSchema: messageParams,
  responsesSchema: messageSchema,
});

const MessageUpdateRoute = putRoute({
  path: "messages/{message_id}",
  paramsSchema: messageParams,
  requestBodySchema: messageRequestBody,
  responsesSchema: messageIDResponse,
});

const MessageDeleteRoute = deleteRoute({
  path: "messages/{message_id}",
  paramsSchema: messageParams,
  responsesSchema: messageIDResponse,
});

export const MessageRoutes = [
  MessageCreateRoute,
  MessageGetAllRoute,
  MessageGetByIDRoute,
  MessageUpdateRoute,
  MessageDeleteRoute,
];
