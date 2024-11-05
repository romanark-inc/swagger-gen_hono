import {
  advisorRoleListResponse,
  advisorRoleRequestBody,
  advisorRoleParams,
  advisorRoleIDResponse,
  advisorRoleSchema,
} from "./schema";
import { getRoute, postRoute, putRoute, deleteRoute } from "../../util";
import { getListQuery } from "../../schema/query";

const AdvisorRoleCreateRoute = postRoute({
  path: "advisorRoles",
  requestBodySchema: advisorRoleRequestBody,
  responsesSchema: advisorRoleIDResponse,
  tags: "AdvisorRole",
  summary: "advisorRole作成",
  description: "advisorRole作成",
});

const AdvisorRoleAllGetRoute = getRoute({
  path: "advisorRoles",
  querySchema: getListQuery,
  responsesSchema: advisorRoleListResponse,
  tags: "AdvisorRole",
  summary: "advisorRole一覧取得",
  description: "advisorRole一覧取得",
});

const AdvisorRoleGetByIdRoute = getRoute({
  path: "advisorRoles/{advisor_role_id}",
  paramsSchema: advisorRoleParams,
  responsesSchema: advisorRoleIDResponse,
  tags: "AdvisorRole",
  summary: "advisorRole取得",
  description: "advisorRole取得",
});

const AdvisorRoleUpdateRoute = putRoute({
  path: "advisorRoles/{advisor_role_id}",
  paramsSchema: advisorRoleParams,
  requestBodySchema: advisorRoleRequestBody,
  responsesSchema: advisorRoleIDResponse,
  tags: "AdvisorRole",
  summary: "advisorRole更新",
  description: "advisorRole更新",
});

const AdvisorRoleDeleteRoute = deleteRoute({
  path: "advisorRoles/{advisor_role_id}",
  paramsSchema: advisorRoleParams,
  responsesSchema: advisorRoleIDResponse,
  tags: "AdvisorRole",
  summary: "advisorRole削除",
  description: "advisorRole削除",
});

export const AdvisorRoleRoutes = [
  AdvisorRoleCreateRoute,
  AdvisorRoleAllGetRoute,
  AdvisorRoleGetByIdRoute,
  AdvisorRoleUpdateRoute,
  AdvisorRoleDeleteRoute,
];
