import {
  chatRoomIDResponse,
  chatRoomSchema,
  chatRoomListResponse,
  chatRoomParams,
  chatRoomRequestBody,
} from "./schema";
import { getRoute, postRoute, putRoute, deleteRoute } from "../../util";

const ChatRoomCreateRoute = postRoute({
  path: "chatRooms",
  requestBodySchema: chatRoomRequestBody,
  responsesSchema: chatRoomIDResponse,
  tags: "ChatRooms",
  description: "chatRoom作成",
  summary: "chatRoom作成",
});

const ChatRoomGetAllRoute = getRoute({
  path: "chatRooms",
  responsesSchema: chatRoomListResponse,
  tags: "ChatRooms",
  description: "chatRoom一覧取得",
});

const ChatRoomGetByIDRoute = getRoute({
  path: "chatRooms/{chatRoom_id}",
  paramsSchema: chatRoomParams,
  responsesSchema: chatRoomSchema,
  tags: "ChatRooms",
  description: "chatRoom取得",
  summary: "chatRoom取得",
});

const ChatRoomUpdateRoute = putRoute({
  path: "chatRooms/{chatRoom_id}",
  paramsSchema: chatRoomParams,
  requestBodySchema: chatRoomRequestBody,
  responsesSchema: chatRoomIDResponse,
  tags: "ChatRooms",
  description: "chatRoom更新",
  summary: "chatRoom更新",
});

const ChatRoomDeleteRoute = deleteRoute({
  path: "chatRooms/{chatRoom_id}",
  paramsSchema: chatRoomParams,
  responsesSchema: chatRoomIDResponse,
  tags: "ChatRooms",
  description: "chatRoom削除",
  summary: "chatRoom削除",
});

export const ChatRoomRoutes = [
  ChatRoomCreateRoute,
  ChatRoomGetAllRoute,
  ChatRoomGetByIDRoute,
  ChatRoomUpdateRoute,
  ChatRoomDeleteRoute,
];
