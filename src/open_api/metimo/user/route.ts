import {
  userIDResponse,
  userSchema,
  userRequestBody,
  userParams,
  userListResponse,
} from "./schema";
import { getRoute, postRoute, putRoute, deleteRoute } from "../../util";

const UserCreateRoute = postRoute({
  path: "users",
  requestBodySchema: userRequestBody,
  responsesSchema: userIDResponse,
  tags: "User",
});

const UserAllGetRoute = getRoute({
  path: "users",
  responsesSchema: userListResponse,
  tags: "User",
});

const UserGetByIDRoute = getRoute({
  path: "users/{user_id}",
  paramsSchema: userParams,
  responsesSchema: userSchema,
  tags: "User",
});

const UserUpdateRoute = putRoute({
  path: "users/{user_id}",
  paramsSchema: userParams,
  requestBodySchema: userRequestBody,
  responsesSchema: userIDResponse,
  tags: "User",
});

const UserDeleteRoute = deleteRoute({
  path: "users/{user_id}",
  paramsSchema: userParams,
  responsesSchema: userIDResponse,
  tags: "User",
});

export const UserRoutes = [
  UserCreateRoute,
  UserAllGetRoute,
  UserGetByIDRoute,
  UserUpdateRoute,
  UserDeleteRoute,
];
