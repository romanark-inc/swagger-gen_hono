import {
  userSchema,
  userRequestBody,
  userParams,
  userListResponse,
} from "./schema";
import { getRoute, postRoute, putRoute, deleteRoute } from "../../util";

const UserCreateRoute = postRoute({
  path: "users",
  requestBodySchema: userRequestBody,
  responsesSchema: userSchema,
});

const UserAllGetRoute = getRoute({
  path: "users",
  responsesSchema: userListResponse,
});

const UserGetByIDRoute = getRoute({
  path: "users/{user_id}",
  paramsSchema: userParams,
  responsesSchema: userSchema,
});

const UserUpdateRoute = putRoute({
  path: "users/{user_id}",
  paramsSchema: userParams,
  requestBodySchema: userRequestBody,
  responsesSchema: userSchema,
});

const UserDeleteRoute = deleteRoute({
  path: "users/{user_id}",
  paramsSchema: userParams,
  responsesSchema: userSchema,
});

export {
  UserCreateRoute,
  UserAllGetRoute,
  UserGetByIDRoute,
  UserUpdateRoute,
  UserDeleteRoute,
};
