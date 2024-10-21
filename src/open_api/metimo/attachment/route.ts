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
  tags: "Attachments",
});

const AttachmentGetAllRoute = getRoute({
  path: "attachments",
  responsesSchema: attachmentListResponse,
  tags: "Attachments",
});

const AttachmentGetByIDRoute = getRoute({
  path: "attachments/{attachment_id}",
  paramsSchema: attachmentParams,
  responsesSchema: attachmentSchema,
  tags: "Attachments",
});

const AttachmentUpdateRoute = putRoute({
  path: "attachments/{attachment_id}",
  paramsSchema: attachmentParams,
  requestBodySchema: attachmentRequestBody,
  responsesSchema: attachmentIDResponse,
  tags: "Attachments",
});

const AttachmentDeleteRoute = deleteRoute({
  path: "attachments/{attachment_id}",
  paramsSchema: attachmentParams,
  responsesSchema: attachmentIDResponse,
  tags: "Attachments",
});

export const AttachmentRoutes = [
  AttachmentCreateRoute,
  AttachmentGetAllRoute,
  AttachmentGetByIDRoute,
  AttachmentUpdateRoute,
  AttachmentDeleteRoute,
];
