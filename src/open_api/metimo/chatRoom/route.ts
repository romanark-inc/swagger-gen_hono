import {
  chatRoomSchema,
  chatRoomListResponse,
  chatRoomParams,
  chatRoomRequestBody,
} from "./schema";
import { getRoute, postRoute, putRoute, deleteRoute } from "../../util";

const ChatRoomCreateRoute = postRoute({
  path: "chatRooms",
  requestBodySchema: chatRoomRequestBody,
  responsesSchema: chatRoomSchema,
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
  responsesSchema: chatRoomSchema,
});

const ChatRoomDeleteRoute = deleteRoute({
  path: "chatRooms/{chatRoom_id}",
  paramsSchema: chatRoomParams,
  responsesSchema: chatRoomSchema,
});

export {
  ChatRoomCreateRoute,
  ChatRoomGetAllRoute,
  ChatRoomGetByIDRoute,
  ChatRoomUpdateRoute,
  ChatRoomDeleteRoute,
};
