import {
  attachmentIDResponse,
  attachmentSchema,
  attachmentListResponse,
  attachmentParams,
  attachmentRequestBody,
} from "./schema";
import { getRoute, postRoute, putRoute, deleteRoute } from "../../util";

const AttachmentCreateRoute = postRoute({
  path: "attachments",
  requestBodySchema: attachmentRequestBody,
  responsesSchema: attachmentIDResponse,
});

const AttachmentGetAllRoute = getRoute({
  path: "attachments",
  responsesSchema: attachmentListResponse,
});

const AttachmentGetByIDRoute = getRoute({
  path: "attachments/{attachment_id}",
  paramsSchema: attachmentParams,
  responsesSchema: attachmentSchema,
});

const AttachmentUpdateRoute = putRoute({
  path: "attachments/{attachment_id}",
  paramsSchema: attachmentParams,
  requestBodySchema: attachmentRequestBody,
  responsesSchema: attachmentIDResponse,
});

const AttachmentDeleteRoute = deleteRoute({
  path: "attachments/{attachment_id}",
  paramsSchema: attachmentParams,
  responsesSchema: attachmentIDResponse,
});

export const AttachmentRoutes = [
  AttachmentCreateRoute,
  AttachmentGetAllRoute,
  AttachmentGetByIDRoute,
  AttachmentUpdateRoute,
  AttachmentDeleteRoute,
];
