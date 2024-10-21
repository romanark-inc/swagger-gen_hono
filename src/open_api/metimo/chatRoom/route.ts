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
});

const ChatRoomGetAllRoute = getRoute({
  path: "chatRooms",
  responsesSchema: chatRoomListResponse,
  tags: "ChatRooms",
});

const ChatRoomGetByIDRoute = getRoute({
  path: "chatRooms/{chatRoom_id}",
  paramsSchema: chatRoomParams,
  responsesSchema: chatRoomSchema,
  tags: "ChatRooms",
});

const ChatRoomUpdateRoute = putRoute({
  path: "chatRooms/{chatRoom_id}",
  paramsSchema: chatRoomParams,
  requestBodySchema: chatRoomRequestBody,
  responsesSchema: chatRoomIDResponse,
  tags: "ChatRooms",
});

const ChatRoomDeleteRoute = deleteRoute({
  path: "chatRooms/{chatRoom_id}",
  paramsSchema: chatRoomParams,
  responsesSchema: chatRoomIDResponse,
  tags: "ChatRooms",
});

export const ChatRoomRoutes = [
  ChatRoomCreateRoute,
  ChatRoomGetAllRoute,
  ChatRoomGetByIDRoute,
  ChatRoomUpdateRoute,
  ChatRoomDeleteRoute,
];
