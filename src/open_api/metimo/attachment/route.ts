import {
  attachmentIDResponse,
  attachmentSchema,
  attachmentListResponse,
  attachmentParams,
  attachmentRequestBody,
} from "./schema";
import { getRoute, postRoute, putRoute, deleteRoute } from "../../util";
import { getListQuery } from "../../schema/query";

const AttachmentCreateRoute = postRoute({
  path: "attachments",
  requestBodySchema: attachmentRequestBody,
  responsesSchema: attachmentIDResponse,
  tags: "Attachments",
  description: "attachment作成",
  summary: "attachment作成",
});

const AttachmentGetAllRoute = getRoute({
  path: "attachments",
  querySchema: getListQuery,
  responsesSchema: attachmentListResponse,
  tags: "Attachments",
  description: "attachment一覧取得",
  summary: "attachment一覧取得",
});

const AttachmentGetByIDRoute = getRoute({
  path: "attachments/{attachment_id}",
  paramsSchema: attachmentParams,
  responsesSchema: attachmentSchema,
  tags: "Attachments",
  description: "attachment取得",
  summary: "attachment取得",
});

const AttachmentUpdateRoute = putRoute({
  path: "attachments/{attachment_id}",
  paramsSchema: attachmentParams,
  requestBodySchema: attachmentRequestBody,
  responsesSchema: attachmentIDResponse,
  tags: "Attachments",
  description: "attachment更新",
  summary: "attachment更新",
});

const AttachmentDeleteRoute = deleteRoute({
  path: "attachments/{attachment_id}",
  paramsSchema: attachmentParams,
  responsesSchema: attachmentIDResponse,
  tags: "Attachments",
  description: "attachment削除",
  summary: "attachment削除",
});

export const AttachmentRoutes = [
  AttachmentCreateRoute,
  AttachmentGetAllRoute,
  AttachmentGetByIDRoute,
  AttachmentUpdateRoute,
  AttachmentDeleteRoute,
];
