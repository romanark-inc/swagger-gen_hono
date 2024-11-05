import {
  roleIDResponse,
  roleListResponse,
  roleRequestBody,
  roleSchema,
  roleParams,
} from "./schema";
import { getRoute, postRoute, putRoute, deleteRoute } from "../../util";
import { getListQuery } from "../../schema/query";
const RoleCreateRoute = postRoute({
  path: "roles",
  requestBodySchema: roleRequestBody,
  responsesSchema: roleIDResponse,
  tags: "Role",
  summary: "role作成",
  description: "role作成",
});

const RoleAllGetRoute = getRoute({
  path: "roles",
  querySchema: getListQuery,
  responsesSchema: roleListResponse,
  tags: "Role",
  summary: "role全取得",
  description: "role全取得",
});

const RoleGetByIDRoute = getRoute({
  path: "roles/{role_id}",
  paramsSchema: roleParams,
  responsesSchema: roleSchema,
  tags: "Role",
  summary: "role取得",
  description: "role取得",
});

const RoleUpdateRoute = putRoute({
  path: "roles/{role_id}",
  paramsSchema: roleParams,
  requestBodySchema: roleRequestBody,
  responsesSchema: roleIDResponse,
  tags: "Role",
  summary: "role更新",
  description: "role更新",
});

const RoleDeleteRoute = deleteRoute({
  path: "roles/{role_id}",
  paramsSchema: roleParams,
  responsesSchema: roleIDResponse,
  tags: "Role",
  summary: "role削除",
  description: "role削除",
});

export const RoleRoutes = [
  RoleCreateRoute,
  RoleAllGetRoute,
  RoleGetByIDRoute,
  RoleUpdateRoute,
  RoleDeleteRoute,
];
