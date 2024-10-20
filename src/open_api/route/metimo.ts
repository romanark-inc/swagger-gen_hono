import { getRoute } from "../util/get";

import { postRoute } from "../util/post";
import { OpenAPIHono } from "@hono/zod-openapi";
import { putRoute } from "../util/put";
import { deleteRoute } from "../util/delete";
import { userRequestBody, userSchema } from "../schema/metimo";
import { OtegamiApi } from "./otegami";

export const metimoApi = new OpenAPIHono();

export const UserCreateRoute = postRoute({
  path: "users",
  requestBodySchema: userRequestBody,
  responsesSchema: userSchema,
});

export const UserAllGetRoute = getRoute({
  path: "users",
  responsesSchema: userSchema,
});

const routes = [UserCreateRoute, UserAllGetRoute];

routes.forEach((route: any) => {
  OtegamiApi.openapi(route, (c) => {
    return c.json({});
  });
});
