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
});

const ChatRoomGetAllRoute = getRoute({
  path: "chatRooms",
  responsesSchema: chatRoomListResponse,
});

const ChatRoomGetByIDRoute = getRoute({
  path: "chatRooms/{chatRoom_id}",
  paramsSchema: chatRoomParams,
  responsesSchema: chatRoomSchema,
});

const ChatRoomUpdateRoute = putRoute({
  path: "chatRooms/{chatRoom_id}",
  paramsSchema: chatRoomParams,
  requestBodySchema: chatRoomRequestBody,
  responsesSchema: chatRoomIDResponse,
});

const ChatRoomDeleteRoute = deleteRoute({
  path: "chatRooms/{chatRoom_id}",
  paramsSchema: chatRoomParams,
  responsesSchema: chatRoomIDResponse,
});

export const ChatRoomRoutes = [
  ChatRoomCreateRoute,
  ChatRoomGetAllRoute,
  ChatRoomGetByIDRoute,
  ChatRoomUpdateRoute,
  ChatRoomDeleteRoute,
];
