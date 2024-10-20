import { OpenAPIHono } from "@hono/zod-openapi";
import {
  UserRoutes,
  PostRoutes,
  LikeRoutes,
  BookmarkRoutes,
  ChatRoomRoutes,
  MessageRoutes,
  CommentRoutes,
  PaymentHistoryRoutes,
  AttachmentRoutes,
} from "../metimo";
import { getRoute, postRoute, putRoute, deleteRoute } from "../util";
export const metimoApi = new OpenAPIHono();

const routes = [
  ...UserRoutes,
  ...PostRoutes,
  ...LikeRoutes,
  ...BookmarkRoutes,
  ...ChatRoomRoutes,
  ...MessageRoutes,
  ...CommentRoutes,
  ...PaymentHistoryRoutes,
  ...AttachmentRoutes,
];

routes.forEach((route) => {
  metimoApi.openapi(route, (c) => {
    return c.json({});
  });
});
