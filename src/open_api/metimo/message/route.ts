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
});

const MessageGetAllRoute = getRoute({
  path: "messages",
  responsesSchema: massageListResponse,
  tags: "Messages",
});

const MessageGetByIDRoute = getRoute({
  path: "messages/{message_id}",
  paramsSchema: messageParams,
  responsesSchema: messageSchema,
  tags: "Messages",
});

const MessageUpdateRoute = putRoute({
  path: "messages/{message_id}",
  paramsSchema: messageParams,
  requestBodySchema: messageRequestBody,
  responsesSchema: messageIDResponse,
  tags: "Messages",
});

const MessageDeleteRoute = deleteRoute({
  path: "messages/{message_id}",
  paramsSchema: messageParams,
  responsesSchema: messageIDResponse,
  tags: "Messages",
});

export const MessageRoutes = [
  MessageCreateRoute,
  MessageGetAllRoute,
  MessageGetByIDRoute,
  MessageUpdateRoute,
  MessageDeleteRoute,
];
